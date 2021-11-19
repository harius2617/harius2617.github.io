const space = 110;
var text = 0;
var countClick = 0;
let firstCard = null;
let arrImg = []
let padX = 250;
let padY = 40;
let arrCover = []

var backGround = document.createElement("div");
document.body.appendChild(backGround);

for (let i = 0; i < 10; i++) {
    let srcIMG = "./img/onepiece" + i.toString() + ".png"
    arrImg.push(srcIMG, srcIMG);
}
arrImg.sort(() => Math.random() - 0.5);
console.log(arrImg)

for (let col = 0; col < 5; col++) {
    for (let row = 0; row < 4; row++) {
        text++;
        var cover = document.createElement("div");
        // cover.setAttribute("class", "cardGame")
        backGround.appendChild(cover);
        cover.style.left = (100 + (space * row)).toString() + 'px';
        cover.style.top = (100 + (col * space)).toString() + 'px';
        cover.style.width = "100px";
        cover.style.height = "100px";
        cover.style.backgroundColor = "orange";
        cover.style.position = 'absolute'
       

        var numLabel = document.createElement("num");
        cover.setAttribute("class", "cardGame")
        cover.appendChild(numLabel);
        numLabel.style.position = "absolute";
        numLabel.style.top = "30px";
        numLabel.style.left = "30px";
        numLabel.innerHTML = text.toString();
        numLabel.style.fontSize = "30px";
        numLabel.style.textAligns = 'center'

        // var x = document.createElement("img");
        // x.setAttribute("src", arrImg[text]);
        // x.setAttribute('class', "cardGame")
        // cover.appendChild(x);
        // x.style.posistion = "absolute";
        // x.style.width = '100px'
        // x.style.height = '100px'
        // x.innerHTML = arrImg[text].toString()
        arrCover.push(cover)
        console.log(arrCover)
    }
}

var len = backGround.children.length;

for (let i = 0; i < len; i++) {
    backGround.arrCover[i].addEventListener('mousedown', /*this.openCard.bind(this)*/function(){
        let addressImg = arrImg[i]
        cover.style.backgroundImage = `url(./${addressImg})`
        cover.style.backgroundSize = "contain"
        console.log(addEventListener)
    })
        
    
}

function openCard(event){
    if (countClick ===2) return;
    var elm = null;
    if(event.target.nodeName === "NUM"){
        elm = event.target.offsetParent;
    } else {
        elm = event.target;
    }
    if(firstCard === elm){
        elm.style.backgroundColor = "orange";
        countClick = 0;
        return;
    }
    const indexNum = event.target.indexNum;

    if(countClick === 0) {
        countClick = 1; 
        firstCard = elm;
    } else if (countClick === 1) {
        countClick = 2
        setTimeout(function(){
            elm.style.backgroundColor = "orange";
            firstCard.style.backgroundColor = "orange";
            countClick = 0;
        }, 500)
    }
    // for (let i = 1; i <= len; i ++){
    //     elm.style.display = arrImg[i]
    // }
    elm.style.backgroundColor = "white"
}
///////////////////////////////////////////



