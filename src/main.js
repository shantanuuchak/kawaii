// Targetting Elements
const gameGrid = document.querySelector(".game-grid");

function getRandChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function buildGrid() {
  for (let i of Array(36).fill(1)) {
    const box = document.createElement("div");
    box.classList.add("box");
    gameGrid.appendChild(box);
  }
}

buildGrid();
