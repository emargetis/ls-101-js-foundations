let munstersDescription = "The Munsters are creepy and spooky.";

function caseSwap(str) {
  let newStr = '';
  
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  
  return newStr;
}

console.log(caseSwap(munstersDescription));