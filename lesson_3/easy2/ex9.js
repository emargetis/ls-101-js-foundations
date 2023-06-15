let title = "Flintstone Family Members";
const SPACES = 40;

let num = Math.floor((SPACES - title.length) / 2);

title = title.padStart(num + title.length);
console.log(title);