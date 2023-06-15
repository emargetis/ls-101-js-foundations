let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let split = munstersDescription.split(' ');
split = split.map(element => element[0].toUpperCase() + element.slice(1));
munstersDescription = split.join(' ');
console.log(munstersDescription);

console.log(munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase());