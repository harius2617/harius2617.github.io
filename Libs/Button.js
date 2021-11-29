import { Node } from "./Node.js";
import { Label } from "./Label.js";
import { Sprite } from "./Sprite.js";

export class Button extends Node {
    constructor(text, listener){
        super();
        this._text = text;
        this._listener = listener;
        this._createTextBtn();
    }

    _initElement(){
        this.elm = document.createElement('button');
        this.elm.style.position = "absolute";  
        this.elm.setAttribute("class", "myButton")
    }

    _createTextBtn(){
        // this.imgBtn = new Sprite("../img/button.png");
        // this.elm.appendChild(this.imgBtn.elm);
        // this.elm.style.objectFit = "cover"
        // this.elm.style.objectPosition = "50%"
        // this.elm.style.backgroundRepeat = "nno-repeat"
        this.textBtn = new Label(this._text, null,40);
        this.elm.appendChild(this.textBtn.elm);
        this.elm.onclick = this._listener;
        
    }

}