import { Node } from "../Libs/Node.js";
import { Sprite } from "../Libs/Sprite.js";
import { Card } from "../Libs/Card.js"
import { Label } from "../Libs/Label.js";
import { Animation } from "../Libs/Animation.js";
import { Button } from "../Libs/Button.js";
import { Audio } from "../Libs/Audio.js";

const cardWid = 100;
const cardHei = 150;
let countClick = 0;
let chooseCard = [];
export class MainGame extends Node {
    constructor() {
        super();
        this._srcImgs = [];
        this._arrCards = [];
        this._init();
        this._initBtn();
        this.clickSound;
        this._createAu();
    }
    
    _init() {
        this.clickCard = this._clickCard.bind(this);
        this.resetGame = this._resetGame.bind(this);
        this.retryGame = this._retryGame.bind(this);
        this.on('mousedown', this.clickCard);
    }
    
    _createAu(){
        this.themeSound = new Audio("../audio/shanks-stop-the-war-theme.mp3");
        this.elm.appendChild(this.themeSound.elm);

        this.clickSound = new Audio("../audio/click-sound.mp3");
        this.elm.appendChild(this.clickSound.elm);
        
        this.corrSound = new Audio("../audio/correct-sound.mp3");
        this.elm.appendChild(this.corrSound.elm);

        this.winSound = new Audio("../audio/clapping-sound.mp3");
        this.elm.appendChild(this.corrSound.elm);

        this.startSound = new Audio("../audio/shuffling.mp3");
        this.elm.appendChild(this.startSound.elm);
        
        this.loserSound = new Audio("../audio/sound-loser.mp3");
        this.elm.appendChild(this.loserSound.elm);
    }

    _resetGame(isReset = true) {
        isReset ? this._createImgSrc() : null;
        this._delCard();
        this.themeSound.elm.load();
        this.themeSound.elm.play();
        this.startSound.elm.load()
        this.startSound.elm.play();
        this._createCards();
        this.scoreStart = 100;
        this.calculatorScore();
        this.checkAmountCard = 20;
        this.btnPlay.active = false;
        this.btnReplay.active = true;
        this.btnRetry.active = true;
        this.notiLose.active = false;
        this.notiWin.active = false;
    }

    _retryGame() {
        this._resetGame(false);
    }

    _delCard() {
        for (let item of this._arrCards) {
            item.destroy();
        }
    }
    _initBtn() {
        this.btnRetry = new Button("Retry", this.retryGame);
        this.elm.appendChild(this.btnRetry.elm);
        this.btnRetry.posY = 780;
        this.btnRetry.posX = 100; 
        this.btnRetry.active = false;

        this.btnReplay = new Button("Replay", this.resetGame);
        this.elm.appendChild(this.btnReplay.elm);
        this.btnReplay.posY = 780;
        this.btnReplay.posX = 400;
        this.btnReplay.active = false;

        this.btnPlay = new Button("Play", this.resetGame);
        this.elm.appendChild(this.btnPlay.elm);
        this.btnPlay.posY = 150;
        this.btnPlay.posX = 100;
    }

    _initElement() {
        this.elm = document.createElement('div');
        this.elm.style.position = "absolute";
        this._scoreLabel = new Label("SCORE:", "white", 70)
        this.elm.appendChild(this._scoreLabel.elm);
        this._scoreLabel.posX = 100;
        this._scoreLabel.posY = 50;

        this.currScore = new Label("100", "white", 70)
        this.elm.appendChild(this.currScore.elm);
        this.currScore.posX = 400;
        this.currScore.posY = 50;

        this.notiWin = new Label("CONGRATULATION!!!", "white", 80)
        this.elm.appendChild(this.notiWin.elm)
        this.notiWin.posx = 300;
        this.notiWin.posY = 375;
        this.notiWin.active = false;

        this.notiLose = new Label("LOSE!!!", "white", 80)
        this.elm.appendChild(this.notiLose.elm)
        this.notiLose.posX = 200;
        this.notiLose.posY = 375;
        this.notiLose.active = false;
    }

    _createImgSrc() {
        this._srcImgs = []
        for (let i = 0; i < 10; i++) {
            const src = "./img/onepiece" + i + ".png";
            this._srcImgs.push(src, src);
        }
        // this._srcImgs.sort(() => Math.random() - 0.5)
    }

    _createCards() {
        const col = 5;
        const row = 4;
        let index = 0;
        const startPosX = 100;
        const startPosY = 150;
        let centerX = startPosX + cardWid * 2;
        let centerY = startPosY + cardHei * 1.5;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let card = new Card(this._srcImgs[index], index + 1);
                this.elm.appendChild(card.elm);
                this._arrCards.push(card);
                card.elm.style.zIndex = 1;
                card.width = cardWid;
                card.height = cardHei;
                card.setPosition(centerX, centerY);
                card._setupCard(cardWid, cardHei);
                let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
                tl.delay(0.2 * index)
                    .add(() => card.elm.style.zIndex = 2)
                    .to(card, {
                        duration: 1,
                        ease: "back.out(4)",
                        posX: j * card.width + startPosX,
                        posY: i * card.height + startPosY,
                    })
                index++;
            }
        }
    }

    calculatorScore() {
        this.currScore.text = this.scoreStart.toString();
        if (this.checkAmountCard == 0) {
            this.themeSound.elm.pause();
            this.winSound.elm.play();
            this.notiWin.active = true
        }
        if (this.scoreStart == 0) {
            this._delCard();
            this.themeSound.elm.pause();
            this.loserSound.elm.play();
                this.notiLose.active = true;
        }
    }

    _scorePlus(){
        this.scorePlus = new Label("+10", "green", 70)
        this.elm.appendChild(this.scorePlus.elm)
        this.scorePlus.posX = 520;
        this.scorePlus.posY = 50
        setTimeout(()=>{
            this.scorePlus.active = false
        }, 1000)
    }

    _scoreMinus(){
        this.scoreMinus = new Label("-10", "red", 70)
        this.elm.appendChild(this.scoreMinus.elm)
        this.scoreMinus.posX = 520;
        this.scoreMinus.posY = 50
        setTimeout(()=>{
            this.scoreMinus.active = false
        }, 1000)
    }

    _clickCard(event) {
        if (!event) return;
        const card = event.target.parentNode;
        if (card.typeElm !== "Card" || countClick == 2) {
            return;
        }
        if (chooseCard.length == 1 && chooseCard[0].childNodes[0].x == card.childNodes[0].x) {
            return;
        }
        this.clickSound.elm.load();
        this.clickSound.elm.play();
        countClick++;
        chooseCard.push(card);
        card.flipOpen();

        if (chooseCard.length === 2) {
            let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
                tl.delay(1)
                    .add(() => this.checkCard());
        }

    }

    checkCard() {
        let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        if (chooseCard[0].childNodes[0].src === chooseCard[1].childNodes[0].src) {
            this.corrSound.elm.load()
            this.corrSound.elm.play();
            this._scorePlus();
            chooseCard[0].corrCard();
            chooseCard[1].corrCard();
            tl.delay(0.5)
                .add(() => {
                    this.elm.removeChild(chooseCard[0]);
                    this.elm.removeChild(chooseCard[1]);
                    this.scoreStart += 10;
                    this.checkAmountCard -= 2;
                    this.calculatorScore();
                    chooseCard = [];
                    countClick = 0;
                })
        } else {
            this._scoreMinus()
            this.scoreStart -= 10;
            tl.delay(0.5)
                .add(() => {
                    chooseCard[0].flipDown();
                    chooseCard[1].flipDown();
                    this.calculatorScore();
                    chooseCard = [];
                    countClick = 0;
                })
        }
    }


}