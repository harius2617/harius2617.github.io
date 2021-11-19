var cover = document.createElement("div");
document.body.appendChild(cover);
cover.style.top  = "300px";
cover.style.left  = "300px";
cover.style.width  = "100px";
cover.style.height  = "100px";
cover.style.backgroundColor = "orange";

var numLabel = document.createElement("div");
cover.appendChild(numLabel);
numLabel.style.position = "absolute";
numLabel.style.top = "40px";
numLabel.style.left = "50px";
numLabel.innerHTML = "1";
numLabel.style.fontSize = "30px";

cover.addEventListener('mousedown', function(){
    cover.style.display = 'none';
})

