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
const playAgain = () => {
  for (let i = 0; i < board.length; i++){
    board[i] ="";
  }
};

return { squareSetUp, getSquare, playAgain };
})();
console.log(squareSetUp (2,X));