//1 => ['red', 'green', 'blue', 'yellow'] because the colors object is mutated within the function because the function acts as pass by reference

//2 => ['red', 'green', 'blue', undefined] because the color parameter within the function shadows the color variable defined in the global scope. 
//It is initialized with a value of udefined since there is not a second argument supplied when updateColors is invoked

//3 => ['red', 'green', 'blue', 'purple', 'pink'] because the color object is mutated both times the updateColors function is called

//4 => ['red', 'green', 'blue', 'purple', 'pink'] because the first time update colors is run, we push a purple into the colors object and return 
//a reference to that same object which is initialized as newColors. The second time we invoke updateColors, we mutate the object again by adding pink.
//This is possible becuase Colors and newColors point to the same object.

//5 => WRONG, should be ['red', 'green' , 'blue'] | ['red', 'green' , ['red', 'green']] because on line 14, we invoke removeColor which takes colors and mutates it and then assigns the reference to 
//color. The reference of colors is then returned to newColors so they now both reference the same object. When addColor is invoked, we pass in the reference 
//to colors and color. The color array is pushed into the colors array as the last element and nothing is done with the return value. Finally because newColors 
//still references the same array as colors, we will print the underlying object.

//6 => WRONG, should be hello!!! then Hello then hello!!! | hello then Hello then Hello!!! because there is a reassignment statement on 6 which turns hello into hello!!! on line 11 and also 
//returns hello!!! to exclaimedWord. CapitalizedWord is Hello because this takes place while word is still just hello on line 10

//7 => hello then Hello then Hello!!! because never reassign the global word iven that the the capitalize function and the exclaim function both define a parameter of word which shadows the global word