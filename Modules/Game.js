import { Node } from "../Libs/Node.js";
import { Sprite } from "../Libs/Sprite.js";
import {Card} from "../Libs/Card.js"
import { Label } from "../Libs/Label.js";
import { Animation } from "../Libs/Animation.js";
import { Button } from "../Libs/Button.js";
const cardWid = 100;
const cardHei = 150;
let countClick = 0;
let chooseCard = [];
export class MainGame extends Node{
    constructor(){
        super();
        this._srcImgs = [];
        this._createImgSrc();
        this._createCards();
        this._clickCard = this._clickCard.bind(this)
        this.on('mousedown', this._clickCard);
        this._createReplayBtn()
        this._createReplayBtn = this._createReplayBtn.bind(this.elm)
        this.on("onclick", this._createReplayBtn)
        // this.replayGame();
        // this._hoverCard = this._hoverCard.bind(this)
        // this.hoverCard('mouseEnter', this._hoverCard)
        this.scoreStart = 100;
        this.checkAmountCard = 20;
    }

    _initElement(){
        this.elm = document.createElement('div');
        this.elm.style.position = "absolute";
        this._scoreLabel = new Label("SCORE:", "white", 70)
        this.elm.appendChild(this._scoreLabel.elm);
        this._scoreLabel.posX = 100;
        this._scoreLabel.posY = 50;
        // this._scoreLabel.active = true;
        this.currScore = new Label("100", "white", 70)
        this.elm.appendChild(this.currScore.elm);
        this.currScore.posX = 370;
        this.currScore.posY = 50;
        // this.currScore.active = true;
        this.btnRetry = new Button("Retry")
        this.elm.appendChild(this.btnRetry.elm)
        this.btnRetry.posY = 780;
        this.btnRetry.posX = 100;
        this.btnRetry.startText.posX = 30;
    }
    _createReplayBtn(){
        this.btnReplay = new Button("Replay", this.replayGame())
        this.elm.appendChild(this.btnReplay.elm)
        this.btnReplay.posY = 780;
        this.btnReplay.posX = 400;
        // this.btnReplay.onClick = this.replayGame()
        // this.replayGame()
        // console.warn(this.btnStart.onclick)
    }



    _createImgSrc(){
        for(let i = 0; i<10; i++){
            const src = "./img/onepiece" + i + ".png";
            this._srcImgs.push(src,src)
        }
        // this._srcImgs.sort(()=>Math.random()-0.5)

    }

    _createCards(){
        // let tl = new Animation();
        const col = 5;
        const row = 4;
        let index = 0;
        const startPosX = 0;
        const startPosY = 0;
        for(let i=1; i <= row; i++){
            for(let j = 1; j <= col; j ++){
                const card = new Card(this._srcImgs[index], index + 1)
                this.elm.appendChild(card.elm);
                // tl._mouseEnter(card)
                card.width = cardWid;
                card.height = cardHei;
                card.posY = i * card.height + startPosY;
                card.posX = j * card.width + startPosX;
                index++
            }
        }
    }

    calculatorScore (){
        this.currScore.text = this.scoreStart.toString()
        if(this.checkAmountCard == 0) {
            setTimeout(() => {
                alert(`Congratulation!!! \nYour score ${this.scoreStart}`)

            },300)
        }
        if(this.scoreStart == 0) {
            setTimeout(() => {
                alert(`You LOSE!!!`)
                
            },300)
        }
    }

    _clickCard(event){
        const card = event.target.parentNode;
        if(card.typeElm !== "Card" || countClick == 2 ){
            return;
        }
        if (chooseCard.length == 1 && chooseCard[0].childNodes[0].x == card.childNodes[0].x){
            return;
        }
        countClick++;
        chooseCard.push(card)
        card.flipOpen();
        // if(chooseCard.length === 1) {
        //     setTimeout(()=>{
        //         // this.elm.removeChild(chooseCard[0])
        //         if(chooseCard.length != 1) return;
        //         chooseCard[0].flipDown();
        //         chooseCard = []
        //         countClick = 0;

        //     }, 2000)
        // }
        if (chooseCard.length === 2){
            this.checkCard()
        }

    }   

    checkCard(){
        if(chooseCard[0].childNodes[0].src === chooseCard[1].childNodes[0].src){
            chooseCard[0].corrCard();
            chooseCard[1].corrCard();
            setTimeout(()=>{
                // chooseCard[0].style.zIndex = '1'
                this.elm.removeChild(chooseCard[0])
                this.elm.removeChild(chooseCard[1])
                this.scoreStart += 10;
                this.checkAmountCard -= 2
                this.calculatorScore()
                chooseCard = []
                countClick = 0;
                
            }, 500)
        } else {
            setTimeout(()=>{
                chooseCard[0].flipDown()
                chooseCard[1].flipDown()
                this.scoreStart -= 10;
                this.calculatorScore();
                chooseCard = []
                countClick = 0;
            }, 500)

        }
    }
    replayGame(){
        console.warn(1)
    }

}