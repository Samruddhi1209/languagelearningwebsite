const letterContainer = document.querySelector(".letter-container");
const clearButton = document.getElementById("clear-button");

// Function to clear the drawing
function clearDrawing() {
    letterContainer.innerHTML = "";
}

clearButton.addEventListener("click", clearDrawing);
