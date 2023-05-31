//--------------------Variables--------------------------------//
//load additional packages
const readline = require('readline-sync');

//define constants
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const OVERALL_WIN_MIN = 3;

//--------------------Functions--------------------------------//
function prompt(message) {
  console.log(`=> ${message}`);
}

function divider() {
  console.log('\n--------------------------------');
}

function welcomeMessage() {
  prompt(`Welcome to rock, paper, scissors, lizard, spock!`);
  prompt(`The first one to ${OVERALL_WIN_MIN} wins wins the whole game.`);
}

function playerWins(user, computer) {
  return WINNING_COMBOS[user].includes(computer);
}

//Generates string of all possible moves including shortcuts
function generateMoveString() {
  let moveString = 'Enter one: ';

  Object.entries(VALID_CHOICES).forEach(element => {
    moveString += `${element[1]} or ${element[0]} for short, `;
  });

  return moveString;
}

//Get user choice and translate it to rock paper scissors lizard or spock
function collectUserChoice() {
  prompt(generateMoveString());

  let userInput = readline.question().toLowerCase();

  while (!(Object.keys(VALID_CHOICES).includes(userInput) ||
         Object.values(VALID_CHOICES).includes(userInput))) {
    prompt(`That's not a valid choice.`);
    prompt(generateMoveString());
    userInput = readline.question().toLowerCase();
  }

  if (Object.values(VALID_CHOICES).includes(userInput)) {
    return userInput;
  } else {
    return VALID_CHOICES[userInput];
  }
}

function generateComputerChoice() {
  let randIndex = Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
  return Object.entries(VALID_CHOICES)[randIndex][1];
}

function returnWinner(user, computer) {
  if (playerWins(user, computer)) {
    return 'user';
  } else if (user === computer) {
    return 'none';
  } else {
    return 'computer';
  }
}

function anotherGame() {
  prompt('Do you want to play another game? y/n');

  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  return answer;
}

function displayRecord(userRecord, computerRecord) {
  prompt(`Your wins: ${userRecord} | Computer wins: ${computerRecord}`);
}


//--------------------Main Program--------------------------------//
while (true) {
  welcomeMessage();

  let userWins = 0;
  let computerWins = 0;

  while (userWins < OVERALL_WIN_MIN && computerWins < OVERALL_WIN_MIN) {

    divider();
    displayRecord(userWins, computerWins);

    let userChoice = collectUserChoice();

    //Generate computer choice
    let computerChoice = generateComputerChoice();

    prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

    //Determine winner
    let currentWinner = returnWinner(userChoice, computerChoice);

    //Increment wins
    if (currentWinner === 'user') {
      userWins += 1;
      prompt('You won that game!');
    } else if (currentWinner === 'computer') {
      computerWins += 1;
      prompt('Computer won that game.');
    } else {
      prompt('That game was a tie.');
    }
  }

  divider();

  displayRecord(userWins, computerWins);

  //Ask user if they want to play again
  let again = anotherGame();
  if (again[0] !== 'y') break;

}
