import { SimulationNodeDatum } from "d3-force";

export class LinkData implements SimulationNodeDatum{
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    
    // Must - defining enforced implementation properties
    source:  string;
    target: string;
    x?: number;
    y?: number;

    constructor(source: string, target: string) {
        this.source = source;
        this.target = target;
    }

}