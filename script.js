function go(mode){
  document.body.classList.add("fade-out");

  setTimeout(() => {
    if(mode === "puzzle"){
      window.location.href = "puzzle.html";
    }
  }, 600);
}
let level = 0;

const levels = [
    2, 3,        // Facile
    4, 5, 6, 7,  // Normal
    9, 10        // Difficile
];

const puzzleContainer = document.querySelector(".puzzle-container");

function createPuzzle(piecesCount) {
    puzzleContainer.innerHTML = "";

    let cols = Math.ceil(Math.sqrt(piecesCount));
    puzzleContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < piecesCount; i++) {
        const piece = document.createElement("div");
        piece.className = "piece";
        piece.dataset.index = i;

        piece.addEventListener("click", () => placePiece(piece));
        puzzleContainer.appendChild(piece);
    }
}

let placed = 0;

function placePiece(piece) {
    if (!piece.classList.contains("filled")) {
        piece.classList.add("filled");
        placed++;

        if (placed === puzzleContainer.children.length) {
            setTimeout(() => {
                alert("Bravo 🎉 Niveau suivant !");
                nextLevel();
            }, 300);
        }
    }
}

function nextLevel() {
    placed = 0;
    if (level < levels.length - 1) {
        level++;
    }
    createPuzzle(levels[level]);
}

// Lancement du jeu
createPuzzle(levels[level]);



