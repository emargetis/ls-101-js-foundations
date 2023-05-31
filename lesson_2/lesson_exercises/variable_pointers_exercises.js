//1 => Hello then Hello because they primitive 'Hello' is stored in both variables (actually both variables point to those spots in memory but we haven't gotten there yet)
//2 => Goodbye then Hello becuase myWord is reassigned with a value of 'Goodbye' while myOtherWord still points at 'Hello'
//3 => ['Hi', 'Goodbye'] then ['Hi', 'Goodbye'] because both variables point to the same pointer that point to the same object and that object is mutated
//4 => ['Hi', 'Goodbye'] then ['Hello', 'Goodbye'] because we change the reference that myWords points to, to point to an entirely different object
//5 => ['Hi', 'Goodbye'] then 'Hello' becuase myWords is an array that gets mutated at index 0 and myWord is a string of 'Hello'
//6 => ['Hi', 'Goodbye'] then 'Hello' becuase myWords is an array that gets mutated at index 0 with the value of 'Hi' and then myWord is reassigned to a value of 'Hi'