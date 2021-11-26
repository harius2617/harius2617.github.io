import { Node } from "./Node.js";
import { Label } from "./Label.js"

export class Button extends Node {
    constructor(text, funct){
        super();
        this._text = text;
        this._createBtn();
        // this._createBtn.onclick() = funct 
        this.funct = funct
        // console.warn(typeof this.funct)

    }

    _initElement(){
        this.elm = document.createElement('button');
        this.elm.style.position = "absolute";  
        this.elm.style.backgroundColor = "#4CAF50"
        this.elm.style.borderRadius = '15%'
        this.elm.style.borderWidth = "7px"
        this.elm.style.boxShadow = "5px 5px 7px #999"
        this.elm.style.width = "190px";
        this.elm.style.height = "80px";
        this.elm._createBtn = this._createBtn.bind(this.elm)
        this.elm._createBtn.onclick = this.funct
    }

    _createBtn(){
        this.startText = new Label(this._text, null,50)
        this.elm.appendChild(this.startText.elm)
        this.startText.posX = 17;
        this.startText.posY = 6;
    }


}