function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  
  //Check that there are an appropriate number of components
  if (dotSeparatedWords.length !== 4) return false;
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false; // we can break out of the entire function by using a return statement with an expression of false instead of using break. Break will always return true.
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('4.5.5'));
console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
console.log(isDotSeparatedIpAddress('10.4.5.11'));