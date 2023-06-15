function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let buff = [1, 2, 3];

addToRollingBuffer1(buff, 3, 4);

console.log(buff);

addToRollingBuffer2(buff, 3, 5);

console.log(buff);

buff = addToRollingBuffer2(buff, 3, 5);

console.log(buff);

buff = addToRollingBuffer2(buff, 3, 6);

console.log(buff);


/* 
The difference between these two implementations is that the former returns a 
reference to the same buffer each time while the latter returns a reference to a 
new array each time. Depending on the way you call each function you may get
different results. For instance, if you call the latter implementation using a
reasssigment statement:
  buffer = addToRollingBuffer2(args);
  buffer = addToRollingBuffer1(args);
  or
  addToRollingBuffer1(args);

then it will yield the same results as addToRollingBuffer1. 

However, if you don't and simply call it:
  addToRollingBuffer2(args);

then the two implementations will yield different 
results. This is because objects are pass by reference and within the second 
function, the reference is being reassigned to a new array instead of mutating
the original caller.
*/
