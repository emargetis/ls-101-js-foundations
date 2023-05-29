//load additional files
const rlSync = require('readline-sync');
const messages = require('./mortgage_messages.json');

//format and output messages in appropriate language
function prompt(message, language = 'en') {
  console.log('=> ' + messages[language][message]);
}

//determine if input is a positive number or 0 
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
} 

//determine if input is a positive
function invalidNumberZero(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) <= 0;
} 

//format any number into whole numbers and 2 decimal places with appropriate rounding
function dollarFormat(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

//Determine language to be used
let lang = 'en';
lang = rlSync.question(prompt("Language")).toLowerCase();
while (!(lang === 'en' || lang === 'es')) {
  lang = rlSync.question(prompt("Invalid Language")).toLowerCase();
}

//Display welcome message
prompt("Welcome", lang);

while (true) {
  
  //Validate loan amount
  let loanAmt = rlSync.question(prompt("Loan Input", lang));
  while (invalidNumberZero(loanAmt)) {
    loanAmt = rlSync.question(prompt("Invalid Number Zero", lang));
  }
  loanAmt = Number(loanAmt);
  
  //Validate APR format and put it into correct format for pmt calculation
  let APR = rlSync.question(prompt("APR Input", lang));
  while (invalidNumber(APR)) {
    APR = rlSync.question(prompt("Invalid Number", lang));
  }
  APR = Number(APR);
  
  let monAPR = APR / 100 / 12;
  
  
  //Validate loan duration and put into correct format for pmt calculation
  let durationYears;
  let durationMonths;
  let durationTotalMonths;
  
  do {
    //validating duration years
    durationYears = rlSync.question(prompt("Duration Years", lang));
    while (invalidNumber(durationYears)) {
      durationYears = rlSync.question(prompt("Invalid Number", lang));
    }
    durationYears = Number(durationYears);
    
    //validating duration months
    durationMonths = rlSync.question(prompt("Duration Months", lang));
    while (invalidNumber(durationMonths)) {
      durationMonths = rlSync.question(prompt("Invalid Number", lang));
    }
    durationMonths = Number(durationMonths);
    
    //Convert duration into total mmonths
    durationTotalMonths = durationYears * 12 + durationMonths;
    
    //Output error message if total duration is <= 0
    if (durationTotalMonths <= 0) {
      prompt("Invalid Total Duration", lang);
    }
  } while (durationTotalMonths <= 0); //Re-run loop if total duration is <= 0
  
  //Calculate monthly payment
  let monthlyPayment;
  if (monAPR !== 0) {
    monthlyPayment = loanAmt * (monAPR / (1 - Math.pow((1 + monAPR), (-durationTotalMonths))));
  } else {
    monthlyPayment = loanAmt / durationTotalMonths;
  }
  
  //Format and output monthly payment
  prompt("Monthly Payment", lang);
  console.log(`$${dollarFormat(monthlyPayment)}`); //formatting payment to dollars and cents
  
  
  //Determine if user wants to loop program
  let again = rlSync.question(prompt("Continue", lang)).toLowerCase();
  
  while (!(again === 'y' || again === 't' || again === 'n')) {
    again = rlSync.question(prompt("Invalid Continuation")).toLowerCase();
  }
  
  if (!(again === 'y' || again === 't')) break;
}