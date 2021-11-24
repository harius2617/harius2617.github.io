import { Node } from "./Node.js";

export class Animation extends Node {
    constructor(){
        super();
        this.tl = gsap.timeline();
    }

    animationUp(obj){
        this.tl.to(obj, {scaleX: 1, duration:0.5})
    }

    animationDown(obj){
        this.tl.to(obj, {scaleX:0 , duration: 0 })
    }

    animCorrCard(obj){
        this.tl.to(obj, {scale: 1.2, opacity: 0.9})
    }
}