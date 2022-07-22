let gameBoard = ["", "", "", "", "", "", "", "", ""];


let currentPlayer = "X";

const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];



document.querySelectorAll('.square').forEach(square => square.addEventListener('click', ());
document.querySelector('.btn-PlayAgain').addEventListener('click', ());


function squareChosen( chosenSquare, idx) {
  gameBoard[idx] = currentPlayer;
  chosenSquare.textContent = currentPlayer;
}


function gameResults(){
  let winningGame = false; //initializes game response to winning the game as false until conditions are met. 
  for (let i=0; i <= 7; i++) {//iterating through winning combos [0-7]
    const gameWin = winCombo[i];
        let playerSign1 = gameBoard[gameWin[0]];
        let playerSign2 = gameBoard[gameWin[1]];  //arrays to represent player selected square choices.
        let playerSign3 = gameBoard[gameWin[2]];
        if (playerSign1 === "" || playerSign2 === "" || playerSign3 === "") { //player peices are not the same.
            continue;
        }
        if (playerSign1 === playerSign2 && playerSign2 === playerSign3) { //if player game symbols ("X || O" ) are all equal to each other, player wins!
            winningGame = true;   
            break // end loop
        }
    }
}
console.log(gameResults[1]);