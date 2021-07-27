const encryptSquareCode = (input) => {
  let output = [];

  for (let i = 0; i <= makeSquare(input).length; i++) {
    let temp = [];
    makeSquare(input).map((e) => {
      temp.push(e.split('')[i]);
    });
    output.push(temp.join(''));
  }

  return output.join(' ');
};

const makeSquare = (string) =>
  deleteSpaces(string).match(
    new RegExp('.{1,' + numberOfCharactersDividedByRoot(string) + '}', 'g'),
  );

const numberOfCharactersDividedByRoot = (string) =>
  roundNumber(stringLength(deleteSpaces(string)) / squareRoot(string));

const roundNumber = (number) => Math.ceil(number);

const squareRoot = (string) => Math.sqrt(stringLength(deleteSpaces(string)));

const stringLength = (string) => string.length;

const deleteSpaces = (string) => string.split(' ').join('');

const INPUT_0 =
  'if man was meant to stay on the ground god would have given us roots';

const INPUT_1 = 'haveaniceday';
const INPUT_2 = 'feedthedog';
const INPUT_3 = 'chillout';
console.log(INPUT_0, encryptSquareCode(INPUT_0));
console.log(INPUT_1, encryptSquareCode(INPUT_1));
console.log(INPUT_2, encryptSquareCode(INPUT_2));
console.log(INPUT_3, encryptSquareCode(INPUT_3));

// * BONUS
const INPUT_BONUS_1 = encryptSquareCode(INPUT_1);
const INPUT_BONUS_2 = encryptSquareCode(INPUT_2);
const INPUT_BONUS_3 = encryptSquareCode(INPUT_3);
const decryptSquareCode = (input) => {
  let output = [];

  for (let i = 0; i <= input.split(' ').length; i++) {
    let temp = [];
    input.split(' ').map((e) => {
      temp.push(e.split('')[i]);
    });
    output.push(temp.join(''));
  }

  return output.join('');
};

console.log(INPUT_BONUS_1, decryptSquareCode(INPUT_BONUS_1));
console.log(INPUT_BONUS_2, decryptSquareCode(INPUT_BONUS_2));
console.log(INPUT_BONUS_3, decryptSquareCode(INPUT_BONUS_3));
