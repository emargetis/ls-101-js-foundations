//1. function that returns the sum of two numbers
/////////// Informal
//intake two arguments
//add the arguments together
//return the sum of the arguments

/////////// Formal
/*
START

Function (arg1, arg2) 
  return arg1 + arg2

END

*/

//2. function that takes an array of strings and returns a string that is all those string concatenated
/////////// Informal
//intake array argument
//Initialize and empty string
//Iterate through the array
//In each iteration, add the current string to the existing string

/////////// Formal
/*
START

Function (array)
  set emptyString
  
  array.forEach( element {
    emptyString + element
  })
  
  return emptyString

END

*/

//3. a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:
// everyOther([1,4,7,2,5]); // => [1,7,5]
/////////// Informal
//intake array argument
//Initialize and empty array
//Iterate through the array
//In each iteration, if the index is equal to 0, 2, etc then add the current element to the empty arry
//Return the array

/////////// Formal
/*
START

Function (array)
  set emptyArray = []
  
  for (i = 0; i < array.length - 1; i++)
    if i === 0 or i % 2 === 0 {
      emptyArray.push[i]
    }
  })
  
  return emptyArray

END

*/

//4. A function that determines the index of the 3rd occurrence of a given character in a string. 
//   For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 
//   6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.
/////////// Informal
//intake string argument and the letter argument
//Initialize a counter variable
//Iterate through the string
//In each iteration, if the current letter is equal to the letter argument then add one to counter
//In each iteration, check if the counter is ===3 and if so, exit iteration and return the current iteration value
//If we reach the end of the iteration value and the counter is less than 3, return null

/////////// Formal
/*
START

Function (string, letter)
  set counter = 0
  
  for (i = 0; i < string.length - 1; i++)
    if string[i] === letter {
      count += 1
    }
    
    if count === 3 {
      return i
    }
  }
  
  return null

END

*/


//5. a function that takes two arrays of numbers and returns the result of merging the arrays. 
//   The elements of the first array should become the elements at the even indexes of the returned array, 
//   while the elements of the second array should become the elements at the odd indexes. For instance:
//   merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
/////////// Informal
//intake two array arguments
//Initialize an empty array
//Iterate through the arrays using the longest array as the # of iterations
//In each iteration, check if there is an element at that index value in the first array, if so then add it to the array
//In each iteration, check if there is an element at that index value in the second array, if so then add it to the array
//Once we reach the end of the loop, return the combined array

/////////// Formal
/*
START

Function (arr1, arr2)
  set emptyarray = {}
  set longerArray = arr1.length >= arr2.length ? arr1.length : arr2.length;
  
  
  for (i = 0; i < Longerarray - 1; i++)
    if (arr1[i]) {
      emptyArray.pop(arr1[i])
    }
    
    if (arr2[i]) {
      emptyArray.pop(arr2[i])
    }
    
  }
  
  return emptyArray

END

*/