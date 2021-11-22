import { Node } from "./Node.js";

export class Animation extends Node {
    constructor(){
        super();
        this.obj;
        this.tl = gsap.timeline();
    }

    _mouseEnter(obj) {
        this.tl.to(obj,{scaleX : 1.2})
    }
}