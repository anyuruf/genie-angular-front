//Path ./components/d3force/node.ts
import { SimulationNodeDatum } from 'd3-force';

// Implementing SimulationNodeDatum interface into our custom Node class
export class NodeData implements SimulationNodeDatum  {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;

    constructor(id: string, firstName: string, lastName: string, dob: string, gender: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
    }

    
}