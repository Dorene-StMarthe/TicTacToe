const game = (()  => {
  const players=(name, piece, ai, turn) => {
    return { name, piece, ai, turn};
  };
let player1 = players('player 1', 'X', false, true);
let player2 = players('player 2', 'O', false, false);})


const winningCombos = [
  [0,1,2],
  [0,3,6]
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [0,4,8]
];