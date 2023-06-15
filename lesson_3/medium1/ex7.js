let answer = 42;

function messWithIt(someNumber) {
  return (someNumber = 8);
}

let newAnswer = messWithIt(answer);

console.log(newAnswer - 8);

/*
I believe this code will output -8 becuase on line 4 we are returning the result 
of a reassignment statement which is nothing and therefore newAnswer will be
assigned undefined. Then on 9 we are subtracting 8 from undefined and I think the
- operator will coerce undefined into 0. 


WRONG - did not see that we were printing the variable value of answer and not newAnswer. However,
even if we were calling newAnswer, the result would be 42 since the += (addition assignment) operator
returns the value from the addition last. Furthermore, if we simply return someNumber = 8 in line 4 using 
an assigment operator without the addition operator then we would get a value of 0 on line 9 because 
newAnswer would be assigned a value of 8 given that the return on line 4 would still be 8. I also mistook
the concetp of ASSIGNMENT not returning anything as opposed to REASSIGMENT which is shown in this problem.
*/