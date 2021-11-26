import {MainGame} from "./Modules/Game.js"
import { Sprite } from "./Libs/Sprite.js";

const mainGame = new MainGame();
const bg = new Sprite("./img/bg.gif")
document.body.appendChild(bg.elm)
bg.width = 1890;
bg.height = 1040;
document.body.appendChild(mainGame.elm)
