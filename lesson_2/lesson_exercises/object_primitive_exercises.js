//1 => Hello because strings are not mutable and we have not reassigned the concatenated verion of the string to a new variable
//2 => Hello then Hello then Hello because none of the string methods mutate the string, they only return a new string
//3 => ['Hello', 'Goodbye'] becuase the push method mutates the array permanently
//4 => ['Hello'] because the concat method for arrays does not mutate the original array
//5 => ['Hello'] because we don't reassign the uppercase element to the original array
//6 => ['HELLO'] because we are reassigning the uppercase element to the original array at element 0. We are therefore mutating the array.