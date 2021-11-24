import { Node } from "./Node.js";
import { Sprite } from "./Sprite.js"
import { Label } from "./Label.js";
import { Animation } from "./Animation.js";

export class Card extends Node{
    constructor(path, index){
        super();
        this._path = path;
        this._text = index;
        this._img;
        this._cover;
        this._label;
        if(path) this._path = path;
        this._createImg();
        this._createcover();
        this._createLabel();
        this.active = true;
    }



    _initElement(){
        this.elm = document.createElement('div');
        this.elm.style.position = "absolute"
        this.elm.flipOpen = this.flipOpen.bind(this)
        this.elm.flipDown = this.flipDown.bind(this)
        this.elm.corrCard = this.corrCard.bind(this)
        this.elm.typeElm = 'Card';

    }

    get path(){
        return this._path;
    }
    set path(value){
        this._path = value;
        this.elm.src = this._path;
    }
    _createImg (){
        this._img = new Sprite(this._path)
        this.elm.appendChild(this._img.elm)
        this._img.active = false;
        this._img.height = 200; 
        this._img.width = 150;

    }

    _createcover (){
        this._cover = new Sprite("./img/cover.jpg")
        this.elm.appendChild(this._cover.elm)
        this._cover.active = true; 
        this._cover.height = 200;
        this._cover.width = 150;
    }

    _createLabel(){
        this._label = new Label(this._text,null, 50);
        this.elm.appendChild(this._label.elm)
        this._label.active = true; 
        this._label.posX = 55;
        this._label.posY = 60;
    }

    flipOpen(){
        let tl = new Animation()
        tl.animationDown(this.elm)
        // tl.tl.add(function(){
            this._cover.active = false;
            this._label.active =false;
            this._img.active = true;
        // })
        tl.animationUp(this.elm)
    }
    flipDown(){
        let tl = new Animation();
        tl.animationDown(this.elm)
        // tl.tl.add(function(){
            this._cover.active = true;
            this._label.active =true;
            this._img.active = false;
        // })
        tl.animationUp(this.elm)
    }

    corrCard(){
        let tl = new Animation()
        tl.animCorrCard(this.elm)
    }
}