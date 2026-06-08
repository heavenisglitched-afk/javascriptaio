/*
 Gamelet: a starting point for writing games
 Author: Travis Smith
 Version: 0.1
 Instructions:
 Include gamelet.js in an HTML document containing an element with id "ball".
 Use the up and down arrow keys to move the ball up and down.
 */

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}

function refresh() {
  ball.style.left = position + "px";
}
