import { Node } from "./Node.js";

export class Sprite extends Node {
    constructor(path){
        super()
        this.imgSrc(path)
        // this._img = path;
    }
    
    _initElement(){
        this.elm = document.createElement('img');
        this.elm.style.position = "absolute";

    }

    imgSrc(path){
        this.elm.src = path;
    }
}