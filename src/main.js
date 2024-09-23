import { chars, charsData } from "./characters";

// Targetting Elements
const gameGrid = document.querySelector(".game-grid");
const points = document.querySelector(".points");

// Game Variables
const gridSize = 6;
const virtualGrid = [];
let score = 0;

function getRandChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function buildGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    // Creating box and setting attributes
    const box = document.createElement("div");
    box.classList.add("box"); // Add box class
    box.setAttribute("draggable", true); // Make it draggable
    box.setAttribute("id", i); // Add id for calculation
    box.style.backgroundImage = ""; // Set random background image

    // Adding the box in grid
    gameGrid.appendChild(box);
  }
}

buildGrid();
