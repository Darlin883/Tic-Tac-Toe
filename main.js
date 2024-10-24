
//Starts player with X
let currentPlayer = "X";
//Game board has 9 empty cells
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const cells = document.querySelectorAll(".cell");

let gameActive = true;

//Switches player turns from X to 0
function handlePlayerTurn (clickedCellIndex) {
    if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    gameBoard[clickedCellIndex] =currentPlayer;
    checkForWinOrDraw();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function cellClicked (clickedCellEvent) {
    
}


    

