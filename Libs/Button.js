import { Node } from "./Node.js";
import { Label } from "./Label.js"

export class Button extends Node {
    constructor(text, listener){
        super();
        this._text = text;
        this._listener = listener;
        this._createBtn();
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
    }

    _createBtn(){
        this.startText = new Label(this._text, null,50)
        this.elm.appendChild(this.startText.elm)
        this.startText.posX = 17;
        this.startText.posY = 6;
        this.elm.onclick = this._listener;
    }


}