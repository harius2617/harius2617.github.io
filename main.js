import {MainGame} from "./Modules/Game.js"
import { Sprite } from "./Libs/Sprite.js";

import { Menu } from "./Libs/MenuStart.js";
const mainGame = new MainGame();
const bg = new Sprite("./img/bg.gif")
document.body.appendChild(bg.elm)
bg.width = 1890;
bg.height = 1040;
const menu = new Menu()
document.body.appendChild(menu.elm)
document.body.appendChild(mainGame.elm)
