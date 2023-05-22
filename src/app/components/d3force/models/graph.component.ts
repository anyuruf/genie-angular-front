import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { select } from 'd3-selection';
import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';
import { drag } from 'd3-drag';
import { scaleOrdinal } from 'd3-scale';
import { NodeData } from './node';
import { LinkData } from './link';

@Component({
  selector: 'app-force-graph',
  template: '<div #graphContainer class="graph-container"></div>',
})
export class ForceDirectedGraphComponent implements OnInit {
  @ViewChild('graphContainer', { static: true }) graphContainer!: ElementRef;
  @Input() nodes!: NodeData[];
  @Input() links!: LinkData[];
  constructor() {}

  ngOnInit() {
   this.createForceGraph();
  }

  private createForceGraph(){
    const element = this.graphContainer.nativeElement;
    const width = 720;
    const height = 420;

    const svg = select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height);


    const simulation = forceSimulation<NodeData, LinkData>(this.nodes)
      .force('link', forceLink().id((d: any) => d.id).distance(200))
      .force('charge', forceManyBody<NodeData>().strength(-20))
      .force('center', forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .style('stroke', 'green')
      .style('stroke-width', '2px');

    // const node = svg
    //   .selectAll<SVGCircleElement, NodeData>('.node')
    //   .data(this.nodes)
    //   .enter()
    //   .append('circle')
    //   .attr('class', 'node')
    //   .attr('r', 10)
    //   .call(drag<SVGCircleElement, NodeData>().on('start', dragStarted).on('drag', dragged).on('end', dragEnded));
    const node = svg.append('g')
    .attr('class', 'nodes')
    .selectAll('circle')
    .data(this.nodes)
    .enter()
    .append('circle')
    .attr('r', 18)
    .attr('fill', 'steelblue')
    .call(drag<SVGCircleElement, NodeData>()
      .on('start', dragStarted)
      .on('drag', dragged)
      .on('end', dragEnded));

    simulation.on('tick', () => {
      link.attr('x1', (d) => (d.source as any).x)
        .attr('y1', (d) => (d.source as any).y)
        .attr('x2', (d) => (d.target as any).x)
        .attr('y2', (d) => (d.target as any).y);

      node.attr('cx', (d) => (d as any).x).attr('cy', (d) => (d as any).y);
    });

    function dragStarted(event: any, d: any) {
      if (!event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event: any, d: any) {
      if (!event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
  }
}
