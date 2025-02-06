// Select elements
const colorBox = document.getElementById("colorBox");
const colorOptions = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

// Predefined colors
const colors = ["yellow", "skyblue", "gray", "brown", "purple", "orange"];

let targetColor = "";
let score = 0;

// Function to start a new game
function startNewGame() {
    // Pick a random color as the target
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;

    // Clear previous buttons
    colorOptions.innerHTML = "";

    // Create color buttons
    colors.forEach(color => {
        const button = document.createElement("button");
        button.style.backgroundColor = color;
        button.dataset.testid = "colorOption"; // Add test attribute
        button.addEventListener("click", () => checkGuess(color));
        colorOptions.appendChild(button);
    });

    // Reset game status
    gameStatus.textContent = "";
}

// Function to check the player's guess
function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct!";
        gameStatus.className = "correct";
        score++;
        scoreDisplay.textContent = score;
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.className = "wrong";
    }
}

// Event listener for new game button
newGameButton.addEventListener("click", startNewGame);

// Start the game on page load
startNewGame();
