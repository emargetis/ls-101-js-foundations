let nanArray = [NaN];

console.log(nanArray[0] === NaN); 
// False because NaN is the only value in JS that is not equal to itself. Instead you can use Number.isNaN() to reliably test it.