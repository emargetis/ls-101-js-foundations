//load additional files / packages
const rlSync = require('readline-sync');
const messages = require('./mortgage_messages.json');

const MONTHS_PER_YEAR = 12;
const ONE_HUNDRED = 100;

//format and output messages in appropriate language
function prompt(message, lang = 'en') {
  console.log('=> ' + messages[lang][message]);
}

//determine if input is a positive number or 0
function checkInvalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

//determine if input is a positive number greater than 0
function checkInvalidNumberZero(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) <= 0;
}

//format any # into whole numbers and 2 decimal places with rounding
function dollarFormat(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

//Ask user for preferred language
function getLanguage() {
  let lang = rlSync.question(prompt("Language")).toLowerCase();
  while (!(lang === 'en' || lang === 'es')) {
    lang = rlSync.question(prompt("Invalid Language")).toLowerCase();
  }
  return lang;
}

//Ask user for loan Amount and validate input
function getLoanAmount(lang) {
  let loanAmt = rlSync.question(prompt("Loan Input", lang));
  while (checkInvalidNumberZero(loanAmt)) {
    loanAmt = rlSync.question(prompt("Invalid Number Zero", lang));
  }
  return Number(loanAmt);
}

//Ask user for APR and validate input
function getMonthlyAPR(lang) {
  let APR = rlSync.question(prompt("APR Input", lang));
  while (checkInvalidNumber(APR)) {
    APR = rlSync.question(prompt("Invalid Number", lang));
  }
  return Number(APR) / ONE_HUNDRED / MONTHS_PER_YEAR;
}

//Ask user for loan duration and validate input
function getTotalDuration(lang) {
  let durationTotalMonths;

  do {
    //validating duration years
    let durationYears = rlSync.question(prompt("Duration Years", lang));
    while (checkInvalidNumber(durationYears)) {
      durationYears = rlSync.question(prompt("Invalid Number", lang));
    }
    durationYears = Number(durationYears);

    //validating duration months
    let durationMonths = rlSync.question(prompt("Duration Months", lang));
    while (checkInvalidNumber(durationMonths)) {
      durationMonths = rlSync.question(prompt("Invalid Number", lang));
    }
    durationMonths = Number(durationMonths);

    //Convert duration into total mmonths
    durationTotalMonths = (durationYears * 12) + durationMonths;

    //Output error message if total duration is <= 0
    if (durationTotalMonths <= 0) {
      prompt("Invalid Total Duration", lang);
    }
  } while (durationTotalMonths <= 0); //Re-run loop if total duration is <= 0

  return durationTotalMonths;
}

//calculate monthly payment
function calculateMontlyPmt(monAPR, principal, durTotalMonths) {
  let monthlyPayment = 0;

  if (monAPR !== 0) {
    let int = monAPR / (1 - Math.pow((1 + monAPR), (-durTotalMonths)));
    monthlyPayment = principal * int;
  } else {
    monthlyPayment = principal / durTotalMonths;
  }

  return monthlyPayment;
}

function anotherCycle(lang) {
  let another = rlSync.question(prompt("Continue", lang)).toLowerCase();

  while (!(another === 'y' || another === 't' || another === 'n')) {
    another = rlSync.question(prompt("Invalid Continuation")).toLowerCase();
  }

  return another;
}

function runProgram() {
  //Determine language to be used
  let language = getLanguage();

  //Display welcome message
  prompt("Welcome", language);

  while (true) {

    //ask for loan amount
    let loanAmt = getLoanAmount(language);

    //Validate APR format and put it into correct format for pmt calculation
    let APR = getMonthlyAPR(language);

    //Validate loan duration and put into correct format for pmt calculation
    let durationTotalMonths = getTotalDuration(language);

    //Calculate monthly payment
    let monthlyPayment = calculateMontlyPmt(APR, loanAmt, durationTotalMonths);

    //Format and output monthly payment
    prompt("Monthly Payment", language);
    console.log(`$${dollarFormat(monthlyPayment)}`); //formatting payment to dollars and cents

    //Determine if user wants to loop program
    let again = anotherCycle(language);

    if (!(again === 'y' || again === 't')) break;
  }
}

runProgram();