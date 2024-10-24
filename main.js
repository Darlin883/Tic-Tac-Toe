
//Starts player with X
let currentPlayer = "X";
//Game board has 9 empty cells
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let cells = document.querySelectorAll('.cell');
let gameActive = true;
let xWins = 0;
let oWins = 0;
let tie = 0;


//Switches player turns from X to 0
function handlePlayerTurn (clickedCellIndex) {
    if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    gameBoard[clickedCellIndex] = currentPlayer;
    checkForWinOrDraw();
    currentPlayer = currentPlayer == "X" ? "O" : "X"// if x went then o will go
    currentPlayer = currentPlayer == "X" ? ")" : "X"// if x went then o will go
    
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


    for (let i = 0; i < winCondition; i++) {
        const [a,b,c] = winCondition[i]
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            document.getElementById.textContent = `${currentPlayer} Wins!`;
            currentPlayer === "X" ? xWins++ : oWins;
            return
        }
    }
    if (!gameBoard.includes("")) {
        document.getElementById("status").textContent = "Tie Game";
        tie ++
        gameActive =  false;
    }
    
                                
}



    


    

