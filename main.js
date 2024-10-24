
//Starts player with X
let currentPlayer = "X";
//Game board has 9 empty cells
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let cells = document.querySelectorAll('.cell');
let gameActive = true;

//Switches player turns from X to 0
function handlePlayerTurn (clickedCellIndex) {
    if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    gameBoard[clickedCellIndex] = currentPlayer;
    checkForWinOrDraw();
    currentPlayer = currentPlayer == "x" ? "o" : "x"// if x went then o will go
    
}

function checkForWinOrDraw(){
    let winCondition = [[0, 1, 2],//first column
                        [3, 4, 5],//second column
                        [6, 7, 8],//third column
                        [0, 3, 6],//top row
                        [1, 4, 7],//second row
                        [2, 5, 8],//third row
                        [0, 4, 8],//left diagonal
                        [2, 4, 6]];//right diagonal
    
                                
}
    


    

