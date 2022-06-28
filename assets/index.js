const set6btn = document.querySelector("#btn6")
const set9btn = document.querySelector("#btn9")
const heading = document.querySelector("#heading")
var n = 6;
var pickedColor;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector("#indicatorStat");
var colors = [];
createBlocks(n);
resetGame();
alert("Game Will Reset Automatically in 2 Seconds after Correct Guess")

function checkColors(e) {
  if( this.style.backgroundColor == colorsBlocks[pickedColor].style.backgroundColor  ){
    statusEl.innerHTML = "Correct!"
    changeColors(colorsBlocks[pickedColor].style.backgroundColor)
    heading.style.backgroundColor = colorsBlocks[pickedColor].style.backgroundColor
    setTimeout(resetGame,2000)
  }
else {
  this.style.backgroundColor = colorsEl.style.backgroundColor
  statusEl.innerHTML = "Try Again";
}
}

function resetGame() {
  createBlocks(n);
  statusEl.innerHTML = "  "
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  heading.style.backgroundColor = "white"
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < 9; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function changeColors(color) {
    for (var i = 0; i < colorsBlocks.length; i++) {
      colorsBlocks[i].style.backgroundColor = color;
    }
}
function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}
set6btn.style.backgroundColor = "black"
set6btn.style.color = "white"
set6btn.style.borderColor = "black"

set6btn.addEventListener("click",() => {
  n = 6
  activateButton(set6btn)
  deactivateButton(set9btn)
  resetGame();
})

set9btn.addEventListener("click",() => {
  n = 9
  activateButton(set9btn)
  deactivateButton(set6btn)
  resetGame();
})
let activateButton =  (el) => {
    el.style.backgroundColor = "black"
    el.style.color = "white"
    el.style.borderColor = "black"
}

let deactivateButton =  (el) => {
  el.style.backgroundColor = "white"
    el.style.color = "black"
    el.style.borderColor = "black"
}