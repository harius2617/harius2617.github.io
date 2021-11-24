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
        obj.style.zIndex = '1'
        this.tl.to(obj, {scale: 1.2})
    }
}