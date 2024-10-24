
//Starts player with X
let currentPlayer = "X";
//Game board has 9 empty cells
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let cells = document.querySelectorAll('.cell');// selets all cells in the game board

let gameActive = true;// game will be active while true
let xWins = 0;//score for X
let oWins = 0;//score for 0
let tie = 0;//score of ties

let xScore = document.getElementById("XScore");
let tScore = document.getElementById("tieScore");
let oScore = document.getElementById("OScore");
//Switches player turns from X to 0
function handlePlayerTurn (clickedCellIndex) {
    // will check if cell is already taken or if the game is not active
    if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
        return;
        // if the cell is already taken (not an empty string) or the game is not active, do nothing and leaves the function
    }

    // update the gameboard with the current player's move
    gameBoard[clickedCellIndex] = currentPlayer;
    document.getElementById(`cell-${clickedCellIndex}`).textContent = currentPlayer;   
    // this updates the gameboard array with the current player's symbol ('X' or 'O')
    // also updates it so that is shows up on the displat 'X' and 'O'
    
    //checks if the move resulted in a win or draw
    checkForWinOrDraw();
    // After making the move the function checks if the game has been won or not

    // this line switches between X and O for the next turn
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    
}

function checkForWinOrDraw(){
    //winning conditons (all possible ways to win the game)
    let winCondition = [
        [0, 1, 2],//first column
        [3, 4, 5],//second column
        [6, 7, 8],//third column
        [0, 3, 6],//top row
        [1, 4, 7],//second row
        [2, 5, 8],//third row
        [0, 4, 8],//left diagonal
        [2, 4, 6]//right diagonal
    ];

    // checks each winning condition
    for (let i = 0; i < winCondition.length; i++) {
        const [a,b,c] = winCondition[i]

        //if all conditions are  met, it is a win. whether horizontally, vertically, or diagonally
        let toWin = gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        if (toWin) {
            gameActive = false;//game is over
            document.getElementById("status").textContent = `${currentPlayer} Wins!`;//player who won is diplayed
            if(currentPlayer === "X"){// if currentPlayer is X, then XScore is added
                xWins++
                xScore.innerText = xWins;
            }else{// else  OScore is added
                oWins++;
                oScore.innerText = oWins;
            }
            return;
        }
    }       //checks for draws (if all cells are filled and no winner)
         if (!gameBoard.includes("")){
        document.getElementById("status").textContent = `Tie Game`;// display tie message
        tie++;
        tScore.innerText = tie;//update tie score
        gameActive = false// stop the game as a tie
        return;// exit the function since the game is a tie
        }

    // if there is no win or draw the status to show whose turn it is
    document.getElementById("status").textContent = `It's ${currentPlayer}'s turn`; //update status
    //fix this line
}

function resetScore(){// reset's score to 0
    xWins = 0;
    oWins = 0;
    tie = 0;
    xScore.innerText = xWins;//displays for 'X' 0
    oScore.innerText = oWins;//displays for 'O' 0
    tScore.innerText = tie;//displays for 'tie' 0
}

function resetGame(){
    gameBoard =["", "", "", "", "", "",  "", "", ""];// get the gameboard back to its original state

    currentPlayer = "X";// starts with X always
    gameActive = true;//starts the game
   

    //clear the board
    //empty's out everyspace on the board
    for(let i = 0; i < cells.length; i++){
        cells[i].textContent = "";
    }
}
    // goes through or iterates over each cell in the cells NodeList
    //when a cell is clicked handlePlayerTurn(index) function is called passing the index
    // updating the gameboard accordingly add 'X' and 'O' in the right order
    cells.forEach((cell,index) =>{
        cell.addEventListener('click', function(){
            handlePlayerTurn(index);
        });
    })

    //both of these  functions can be called when the game starts
    // to reset the game or score
    document.getElementById("reset").addEventListener('click', resetGame);
    document.getElementById("reset-score").addEventListener("click",  resetScore);

// document.getElementById("gameWins")
    

