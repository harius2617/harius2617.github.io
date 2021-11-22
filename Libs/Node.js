export class Node{
    constructor(){
        this._initElement();
        this.elm;
        this._width = 0;
        this._height = 0;
        this._posX;
        this._posY;
        this._active;
    }
    _initElement(){
        this.elm = document.createElement('div');
        this.elm.style.position = "relative"
    }

    get width(){
        return this._width;
    }
    set width(value){
        this._width = value
        this.elm.style.width = this._width + "px";
    }

    get height(){
        return this._height;
    }
    set height(value){
        this._height = value
        this.elm.style.height = this._height + "px";
    }

    get posX(){
        return this._posX;
    }
    set posX(value){
        this._posX = value
        this.elm.style.left = this._posX + "px";
    }

    get posY(){
        return this._posY;
    }
    set posY(value){
        this._posY = value
        this.elm.style.top = this._posY + "px";
    }

    get active(){
        return this._active;
    }
    set active(value){
        this._active = value;
        this.elm.style.display = this._active ? "block" : "none";
    }

    on(event, listener){
        this.elm.addEventListener(event, listener);
    }

    hoverCard(event, listener){
        this.elm.addEventListener(event, listener);
    }
}