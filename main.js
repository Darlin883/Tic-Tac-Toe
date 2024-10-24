let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

let gameActive = true;

function handlePlayerTurn (clickedCellIndex) {
    if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    gameBoard[clickedCellIndex] =currentPlayer;
    checkForWinOrDraw();

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

