//1 => 10
//2 => 5 then 10
//3 => 5
//4 => It will throw an error because within the function we are declaring num 
//which shadows the global num and we are trying to use it without intitializing
//it. Unlike var, let does not automatically assign a variable undefined when hoisting.
//5 => 5 because the local variable num within the function shadows the global variable
//6 => 3
//WRONG -- 7 => nothing because it is an infinite loop. The num on line 3 references the global num.