import { Node } from "./Node.js";

export class Label extends Node {
    constructor(text, color, size){
        super();
        this._text = text;
        this._color = color ? color : "black";
        this._size = size ? size : "50px"
        this.createFont();
    }

    _initElement(){
        this.elm = document.createElement('div');
        this.elm.style.position = "absolute"
    }

    get text(){
        return this._text;
    }

    set text(value){
        this._text = value;
        this.elm.innerHTML = this._text.toString()
    }

    get color(){
        return this._color;
    }

    set color(value){
        this._color = value;
        this.elm.style.color = this._color
    }

    get size(){
        return this._size;
    }

    set size(value){
        this._size = value;
        this.elm.style.fontSize = this._size.toString() + "px"
    }


    createFont(){
        this.elm.innerHTML = this._text.toString()
        this.elm.style.fontSize = this._size + "px"
        this.elm.style.color = this._color
    }
}