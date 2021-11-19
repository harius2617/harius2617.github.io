const space = 110;
var text = 0;
var countClick = 0;
let firstCard = null;
let firstImg = null;
let arrImg = [];
var backGround = document.createElement("div");
        document.body.appendChild(backGround);
        
for (let col = 0; col < 5; col++) {
    for (let i = 0; i < 10; i++) {
        let srcIMG = "./img/onepiece" + i.toString() + ".png"
        arrImg.push(srcIMG, srcIMG);
    }
    arrImg.sort(() => Math.random() - 0.5);
    for (let row = 0; row < 4; row++) {
        text++
        var card = document.createElement("div");
        // card.setAttribute("class", 'cardGame')
        backGround.appendChild(card);
        card.style.left = (300 + (space * col)).toString() + 'px';
        card.style.top = (300 +( row * space)).toString() + 'px';
        card.style.width = "100px";
        card.style.height = "100px";
        card.style.backgroundColor = "orange";
        card.style.position = 'absolute'

        var numLabel = document.createElement("num");
        card.appendChild(numLabel);
        numLabel.style.position = "absolute";
        numLabel.style.top = "30px";
        numLabel.style.left = "30px";
        numLabel.innerHTML = text.toString();
        numLabel.style.fontSize = "30px";

        var img = document.createElement("img");
        card.appendChild(img);
        // img.setAttribute("class", 'cardGame')
        img.style.position = "absolute";
        img.style.top = "0px";
        img.style.left = "0px";
        img.style.width = "100px";
        img.style.height = "100px";
        img.src = arrImg[text].toString();
        img.style.display = 'none';

    }
}

    var len = backGround.children.length;
    for(let i = 0; i < len; i ++) {
        backGround.children[i].addEventListener('mousedown',this.openCard.bind(this))}

function openCard(event){
    const elm = event.target;
    const img = elm.children[1];
    img.style.display = 'block';
}

function openCard(event){
    if (countClick ===2) return;

    var elm = null;
    if(event.target.nodeName === "NUM"){
        elm = event.target.offsetParent;
    } else {
        elm = event.target;
    }

    let img = elm.children[1];
    if(firstCard === elm){
        elm.style.backgroundColor = "orange";
        countClick = 0;
        return;
    }
    
    if(countClick === 0) {
        countClick = 1; 
        firstCard = elm;
        firstImg = firstCard.children[1];
    } else if (countClick === 1) {
        countClick = 2
        setTimeout(function(){
            elm.style.backgroundColor = "orange";
            firstCard.style.backgroundColor = "orange";
            firstImg.style.display = 'none';
            img.style.display = 'none';
            countClick = 0;
        }, 500)
    }
    img.style.display = 'block';
}
