import { Node } from "./Node.js";

export class Audio extends Node {
    constructor(srcAudio){
        super();
        this._path = srcAudio;
        this.addSrcAudio();
    }

    _initElement(){
        this.elm = document.createElement("AUDIO");
    }

    get path(){
        return this.path;
    }

    set path(value){
        this._path = value;     
        this.elm.src = this._path;
    }

    addSrcAudio(){
        this.elm.src = this._path;
    }


}