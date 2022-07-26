const gameStatus = document.querySelector('.displayMessage');

let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"

let playerOne = "CSS/Player1avatar.png"
let playerTwo = "CSS/Player2avatar.png"

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll('.square');
buttons.forEach(square => {
  square.addEventListener("click", () => {
    audio.play();
  });
});


const winningSound = new Audio("https://pixabay.com/sound-effects/horn-stabs-entrance-14741/");





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

const winningDisplay = () => "Player " + currentPlayer + " Won!";
const tiedGameMessage = () => "Tied Game!";
const playersTurn = () => "It's " + currentPlayer + " turn!";
gameStatus.textContent = playersTurn();


document.querySelectorAll('.square').forEach(square => square.addEventListener('click', clickedSquareEvent));
document.querySelector('.btn-PlayAgain').addEventListener('click', playAgainOption, flipCard);


function clickedSquareEvent(squareSelection) { //When a square is clicked execution
  const chosenSquare = squareSelection.target;
  const idx = parseInt(chosenSquare.getAttribute('box'));
  if (gameBoard[idx] !== "" || !gameActive) {
      return;
  }
  squareChosen(chosenSquare, idx);
  gameResults();
}

function squareChosen( chosenSquare, idx) {
  gameBoard[idx] = currentPlayer;
  chosenSquare.textContent = currentPlayer;
}



//Ternary 
function players() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";  //players
    gameStatus.textContent = playersTurn();

}

/*
//If else
let otherPlayer;
if (currentplayer === "X"){
  otherPlayer= "O"}
  else{
    otherPlayer= "X"
  }
*/

let gameActive = true;
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
        } }
  if (winningGame) {
  gameStatus.textContent = winningDisplay();   //display winners message
  winningSound.play();
  gameActive = false;
  return;
}


let gameTie= !gameBoard.includes("");
    if (gameTie) {
        gameStatus.textContent = tiedGameMessage();  //tied game
        gameActive = false;
        return;
    }
      players();
}



function playAgainOption() {
  gameActive = true;                                  
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameStatus.textContent = playersTurn();
  document.querySelectorAll('.square').forEach(square => square.textContent = "");
}

const card = document.querySelectorAll('.square')
 card.addEventListerner('click',flipCard);
 function flipCard() {
  card.classList.toggle('flipCard');
 }
