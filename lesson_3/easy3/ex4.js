let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); //returns a new object so arr 1 and arr 2 point to different objects
arr2[0].first = 42;
console.log(arr1); //[{ first: "value1" }, { second: "value2" }, 3, 4, 5];

