let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let cells = document.querySelectorAll('.cell');
let gameActive = true;

function handlePlayerTurn (clickedCellIndex) {
    if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    gameBoard[clickedCellIndex] = currentPlayer;
    checkForWinOrDraw();
    currentPlayer = currentPlayer == "X" ? "O" : "X"// if x went then o will go
    
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
     
    let roundWon = false;


}

function resetGame(){
    gameBoard =["", "", "", "", "", "",  "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("status").textContent = `tIt's a ${currentPlayer}'s turn`;

    //clear the board
    for(let i = 0; i < cells.length; i++){
        cells[i].textContent = "";
    }

    cells.forEach((cell,index) =>{
        cell.addEventListener('click', function(){
            handlePlayerTurn(index);
        });
    })
}

    

