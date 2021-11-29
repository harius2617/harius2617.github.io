import { Node } from "./Node.js";
import { Label } from "./Label.js";
import { Sprite } from "./Sprite.js";

export class Button extends Node {
    constructor(text, listener){
        super();
        this._text = text;
        this._listener = listener;
<<<<<<< HEAD
        this._createTextBtn();
=======
        this._createBtn();
>>>>>>> eacc73e2c9462096d6e10cbb71053444576b34d4
    }

    _initElement(){
        this.elm = document.createElement('button');
        this.elm.style.position = "absolute";  
<<<<<<< HEAD
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
        
=======
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
>>>>>>> eacc73e2c9462096d6e10cbb71053444576b34d4
    }

}