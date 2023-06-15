function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*No since function to leaves the return line blank and JS doesn't rely on the semicolon to indicate the end of a return statement.
Semicolons are technically optional.*/