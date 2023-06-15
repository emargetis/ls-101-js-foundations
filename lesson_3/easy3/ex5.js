function isColorValid(color) {
  return (color === "blue" || color === "green");
}

function isColorValid(color) {
  return (color === "blue" || color === "green") ? 1 === 1 : 1 === 0;
}

let isColorValid2 = (color) => color === "blue" || color === "green";