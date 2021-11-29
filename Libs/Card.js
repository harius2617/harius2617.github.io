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
<<<<<<< HEAD
        this.elm.setAttribute("class", "myCard")
=======
>>>>>>> eacc73e2c9462096d6e10cbb71053444576b34d4
        this.elm.style.position = "absolute";
        this.elm.flipOpen = this.flipOpen.bind(this);
        this.elm.flipDown = this.flipDown.bind(this);
        this.elm.corrCard = this.corrCard.bind(this);
        this.setPosition = this.setPosition.bind(this);
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
        this._img = new Sprite(this._path);
        this.elm.appendChild(this._img.elm);
        this.elm.style.position = "absolute";
        this._img.active = false;
       
    }

    _createcover (){
        this._cover = new Sprite("./img/cover.jpg");
        this.elm.appendChild(this._cover.elm);
        this.elm.style.position = "absolute";
        this._cover.active = true; 
    }

    _createLabel(){
        this._label = new Label(this._text,null, 40);
        this.elm.appendChild(this._label.elm);
        this._label.active = true; 
    }

    _setupCard(wid, hei){
        this._img.height = this._img.elm.parentNode.style.height; 
        this._img.width = this._img.elm.parentNode.style.width;

        this._cover.height = this._cover.elm.parentNode.style.height;
        this._cover.width = this._cover.elm.parentNode.style.width;
<<<<<<< HEAD
=======

        this._label.posX = wid/2 - 20;
        this._label.posY = hei/2 - 22;
>>>>>>> eacc73e2c9462096d6e10cbb71053444576b34d4
    }

    flipOpen(){
        let tl = new Animation();
        tl.animationDown(this.elm);
        // tl.tl.add(function(){
            this._cover.active = false;
            this._label.active =false;
            this._img.active = true;
        // })
        tl.animationUp(this.elm);
    }
    flipDown(){
        let tl = new Animation();
        tl.animationDown(this.elm);
        // tl.tl.add(function(){
            this._cover.active = true;
            this._label.active =true;
            this._img.active = false;
        // })
        tl.animationUp(this.elm);
    }

    corrCard(){
        let tl = new Animation();
        tl.animCorrCard(this.elm);
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }
}