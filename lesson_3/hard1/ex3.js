
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => one is: ["one"]; 
console.log(`two is: ${two}`); // => two is: ["two"];
console.log(`three is: ${three}`); // => three is: ["three"];


/*
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => one is: ["one"];
console.log(`two is: ${two}`); // => two is: ["two"];
console.log(`three is: ${three}`); // => three is: ["three"];
*/

/*
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => one is: ["two"]; why aren't the brackets there?
console.log(`two is: ${two}`); // => two is: ["three"]; why aren't the brackets there?
console.log(`three is: ${three}`); // => three is: ["one"]; why aren't the brackets there?
*/