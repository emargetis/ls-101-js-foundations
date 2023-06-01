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

function printDivider() {
  console.log('\n--------------------------------');
}

function displayWelcome() {
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

function invalidChoices(userInput) {
  return !(Object.keys(VALID_CHOICES).includes(userInput) ||
         Object.values(VALID_CHOICES).includes(userInput));
}

//Get user choice and translate it to rock paper scissors lizard or spock
function collectUserChoice() {
  prompt(generateMoveString());

  let userInput = readline.question().toLowerCase();

  while (invalidChoices(userInput)) {
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

  while ((answer[0] !== 'n' && answer[0] !== 'y') || answer.length > 1) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  return answer;
}

function displayScorecard(score) {
  prompt(`Your wins: ${score['userScore']} | Computer wins: ${score['computerScore']}`);
}

function displayRoundWinner(winner) {
  if (winner === 'user') {
    prompt('You won that game!');
  } else if (winner === 'computer') {
    prompt('Computer won that game.');
  } else {
    prompt('That game was a tie.');
  }
}

function incrementScore(score, winner) {
  if (winner === 'user') {
    score['userScore'] += 1;
  } else if (winner === 'computer') {
    score['computerScore'] += 1;
  }
}

//--------------------Main Program--------------------------------//
while (true) {
  console.clear();
  displayWelcome();

  let scoreBoard = {
    userScore: 0,
    computerScore: 0,
  };

  while (scoreBoard['userScore'] < OVERALL_WIN_MIN && scoreBoard['computerScore'] < OVERALL_WIN_MIN) {

    printDivider();
    displayScorecard(scoreBoard);

    let userChoice = collectUserChoice();

    //Generate computer choice
    let computerChoice = generateComputerChoice();

    prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

    //Determine winner
    let roundWinner = returnWinner(userChoice, computerChoice);

    //Increment Score accordingly
    incrementScore(scoreBoard, roundWinner);
    displayRoundWinner(roundWinner);
  }

  printDivider();
  displayScorecard(scoreBoard);

  //Ask user if they want to play again
  let again = anotherGame();
  if (again[0] !== 'y') break;

}
