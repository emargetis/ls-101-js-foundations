function factors(number) {
  let divisor = number;
  let factors = [];
  
  while (divisor > 0) {
    if (number % divisor === 0) { // The purpose is to check if number is cleanly divisible by the divisor
      factors.push(number / divisor); // If we simply did factors.push(divisor) the numbers in the array would be reversed
    }
    divisor -= 1;
  }
  
  return factors;
}

console.log(factors(20));
console.log(factors(0));
console.log(factors(-5));