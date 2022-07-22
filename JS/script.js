const currentPlayer = (piece) => {
  this.piece = piece;
  const getPiece = () => {
    return piece;
  };
  return {getPiece};
  
//needs to be in the global scope!
};
//console.log(currentPlayer.getPiece(X));


const gameBoard = (() => {
  const board = ["" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,""];

//game flow
//allows players to add thier piece to their chosen spot on the board
const squareSetUp = (idx, piece)  => {
  if (idx > board.length) return;
  board[idx] = piece;
};
const getSquare = (idx) => {
  if (idx> board.length) return;
  return board[idx];
};


return { squareSetUp, getSquare, playAgain };
})();

const playAgain = () => {
  for (let i = 0; i < board.length; i++){
    board[i] ="";
  }
};


//if any combo returns true, then x || o wins!
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
