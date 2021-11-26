import { Node } from "./Node.js";
import { Button } from "./Button.js";

export class Menu extends Button {
    constructor(){
        super();
        this._createStartBtn();
        this._createStartBtn = this._createStartBtn.bind(this)
    }

    _createStartBtn(){
        let startBtn = new Button("START");
        this.elm.appendChild(startBtn.elm);
        startBtn.posX = 300;
        startBtn.posY = 350;
        
    }
}