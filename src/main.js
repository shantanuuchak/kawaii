import { chars, charsData } from "./characters";

// Targetting Elements
const gameGrid = document.querySelector(".game-grid");

// Game Variables
const virtualGrid = [];

function getRandChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function buildGrid() {
  for (let i of Array(36).fill(1)) {
    // Creating box and image elements
    const box = document.createElement("div");
    const img = document.createElement("img");
    img.src = charsData[getRandChar()];

    // Adding image inside the box
    box.appendChild(img);
    // Adding the box in grid
    box.classList.add("box");
    gameGrid.appendChild(box);
  }
}

buildGrid();
