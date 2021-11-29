import { Node } from "./Node.js";

export class Animation extends Node {
    constructor(){
        super();
        this.tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        this.obj;
    }

    animationUp(obj){
        this.tl.to(obj, {scaleX: 1, duration:0.5});
    }

    animationDown(obj){
        this.tl.to(obj, {scaleX:0 , duration: 0 });
    }

    animCorrCard(obj){
        obj.style.zIndex = 3;
        this.tl.to(obj, {scale: 1.2, duration:0.5});
    }
} 