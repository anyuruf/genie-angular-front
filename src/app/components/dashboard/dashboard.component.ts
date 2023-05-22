import { Component } from '@angular/core';
import { LinkData, NodeData } from '../d3force/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  nodes: NodeData[] = [
    {
      id: '123KGZ',
      firstName: 'Jenesio Omodo',
      lastName: 'Anyuru',
      dob: '11 November 1927',
      gender: 'Male',
    },
    {
      id: '126KGZ',
      firstName: 'Anna Maria',
      lastName: 'Kababito',
      dob: '11 Feb 1957',
      gender: 'Female',
    },
    {
      id: '123XFQ',
      firstName: 'Francis',
      lastName: 'Anyuru',
      dob: '28 June 1980',
      gender: 'Male',
    },
    {
      id: '123XFZ',
      firstName: 'Kenneth',
      lastName: 'Rogers',
      dob: '28 June 1983',
      gender: 'Male',
    },
    {
      id: '123XFY',
      firstName: 'Cynthia',
      lastName: 'Anyuru',
      dob: '28 June 1989',
      gender: 'Female',
    },
    {
      id: '123XVZ',
      firstName: 'Kelly Price',
      lastName: 'Anyuru',
      dob: '28 June 1991',
      gender: 'Male',
    },
  ];

  links: LinkData[] = [
    { source: '123KGZ', target: '123XFQ' },
    { source: '123KGZ', target: '123XFZ' },
    { source: '123KGZ', target: '123XFY' },
    { source: '123KGZ', target: '123XVZ' },
    { source: '126KGZ', target: '123XFQ' },
    { source: '126KGZ', target: '123XFZ' },
    { source: '126KGZ', target: '123XFY' },
    { source: '126KGZ', target: '123XVZ' },
  ];
}