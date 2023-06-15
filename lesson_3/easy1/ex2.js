let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

/*you can check the last character and compare it to an exclamation mark literal*/
function exclamationCheck(str) {
  return str[str.length - 1] === '!';
}

console.log(exclamationCheck(str1));
console.log(exclamationCheck(str2));

str1.endsWith('!');
str2.endsWith('!');