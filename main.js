import {MainGame} from "./Modules/Game.js"
import { Sprite } from "./Libs/Sprite.js";
import { Audio } from "./Libs/Audio.js";

const mainGame = new MainGame();
<<<<<<< HEAD
const bg = new Sprite("./img/bg.jpg");
document.body.appendChild(bg.elm);
bg.width = 1720;
bg.height = 980;
document.body.appendChild(mainGame.elm);
let theme = new Audio("./audio/shanks-stop-the-war-theme.mp3");
document.body.appendChild(theme.elm);
theme.elm.loop = true;
=======
const bg = new Sprite("./img/bg.gif")
document.body.appendChild(bg.elm)
bg.width = 1890;
bg.height = 1040;
document.body.appendChild(mainGame.elm)
let theme = new Audio("./audio/shanks-stop-the-war-theme.mp3")
document.body.appendChild(theme.elm)
theme.elm.loop = true
>>>>>>> eacc73e2c9462096d6e10cbb71053444576b34d4
theme.elm.autoplay = true;

