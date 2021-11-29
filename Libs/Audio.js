import { Node } from "./Node.js";

export class Audio extends Node {
    constructor(srcAudio){
        super();
        this._path = srcAudio;
        this.addSrcAudio();
    }

    _initElement(){
<<<<<<< HEAD
        this.elm = document.createElement("AUDIO");
=======
        this.elm = document.createElement("AUDIO")
>>>>>>> eacc73e2c9462096d6e10cbb71053444576b34d4
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