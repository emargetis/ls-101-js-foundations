//Ask the user for the first number
//Ask the user for the second number
//Ask the user for the operation type
// *make sure the inputs are converted to numbers and operators
//Perform the calculation
//Display the result in the terimal

const rlSync = require('readline-sync');
const messages = require('./calculator_messages.json');
let lang = 'en';

function prompt(message, lang='en') {
  let output = messages[lang][message];
  console.log(`=> ${output}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}


prompt('Welcome', lang);

let response = 'y';

while (response === 'y') {

  prompt('First Number', lang);
  let firstNumber = rlSync.question();
  
  while (invalidNumber(firstNumber)) {
    prompt('Invalid Number', lang);
    firstNumber = rlSync.question();
  }
  
  prompt('Second Number', lang);
  let secondNumber = rlSync.question();
  
  while (invalidNumber(secondNumber)) {
    prompt('Invalid Number', lang);
    secondNumber = rlSync.question();
  }
  
  prompt('Operation Selection', lang);
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
  }
  
if (output) {
  console.log(`The result is: ${output}`);
} else {
  console.log(`Cannot perform calculation. Please enter a valid operation using 1-4`);
}
  
  prompt('Another Calculation', lang);
  response = rlSync.question().toLowerCase();
}
