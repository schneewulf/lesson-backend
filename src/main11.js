//@flow

const X = 'X';
const O = 'O';
const _ = null;
function findWinner(arrayOfString) {
  let x = 0;
  let y = 0;
  //check x
  let winner = '';
  for (let i = 0; i < 4; i = i + 3) {
    winner =
      winner ||
      checkWinner(arrayOfString[i], arrayOfString[i + 1], arrayOfString[i + 2]);
  }
  //check y
  for (let i = 0; i < 4; i++) {
    winner =
      winner ||
      checkWinner(arrayOfString[i], arrayOfString[i + 3], arrayOfString[i + 6]);
  }
  winner =
    winner ||
    checkWinner(arrayOfString[0], arrayOfString[4], arrayOfString[8]) ||
    checkWinner(arrayOfString[2], arrayOfString[4], arrayOfString[6]);
  return winner;
}
function checkWinner(input1, input2, input3) {
  if (input1 === input2 && input2 === input3) {
    return 'winner ' + input1;
  } else {
    return null;
  }
}
console.log(findWinner([X, _, O, X, O, X, O, _, _]));
