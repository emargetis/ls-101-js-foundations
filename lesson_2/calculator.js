//Ask the user for the first number
//Ask the user for the second number
//Ask the user for the operation type
// *make sure the inputs are converted to numbers and operators
//Perform the calculation
//Display the result in the terimal

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}


prompt('Welcome to Calculator!');

prompt('What is the first number?');
let firstNumber = rlSync.question();

while (invalidNumber(firstNumber)) {
  prompt("Hmm... that doesn't look like a valid number.\n Please enter a number below:");
  firstNumber = rlSync.question();
}

prompt('What is the second number?');
let secondNumber = rlSync.question();

while (invalidNumber(secondNumber)) {
  prompt("Hmm... that doesn't look like a valid number.\n Please enter a number below:");
  secondNumber = rlSync.question();
}

prompt('Which operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = rlSync.question();

let output;


switch (operation) {
  case '1':
    output = Number(firstNumber) + Number(secondNumber);
    break;
  case '2':
    output = Number(firstNumber) - Number(secondNumber);
    break;
  case '3':
    output = Number(firstNumber) * Number(secondNumber);
    break;
  case '4':
    output = Number(firstNumber) / Number(secondNumber);
    break;
  default:
    prompt('Please enter valid inputs - two numbers and 1-4 for the operation.');
    break;
}

prompt(`The result is: ${output}`);
