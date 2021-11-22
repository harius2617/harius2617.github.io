import {MainGame} from "./Libs/Game.js"
import { Sprite } from "./Libs/Sprite.js";
const mainGame = new MainGame();
const bg = new Sprite("./img/bg.jpg")
document.body.appendChild(bg.elm)
bg.width = 2090;
bg.height = 1080;

document.body.appendChild(mainGame.elm)