import {MainGame} from "./Modules/Game.js"
import { Sprite } from "./Libs/Sprite.js";
import { Audio } from "./Libs/Audio.js";

const mainGame = new MainGame();
const bg = new Sprite("./img/bg.jpg");
document.body.appendChild(bg.elm);
bg.width = 1720;
bg.height = 980;
document.body.appendChild(mainGame.elm);
let theme = new Audio("./audio/shanks-stop-the-war-theme.mp3");
document.body.appendChild(theme.elm);
theme.elm.loop = true;
theme.elm.autoplay = true;

