//Implicit Type Annotations ----
let str = 'hello';
str = 2; // ERROR: type is not assignable to string

//Explicit Type Annotations ------
export function add(a: number, b: number): string {
  return String(a + b);
}
//There is a type after each parameter //There is a colon then a type before the function braces //This is the type that that the function returns

//Union Types -------
//The variable must hold one OR another type
let str: string | number;
str = 'hello'; // fine
str = 2; // fine
str = true; // ERROR
// You can have as many as you like
type MouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';

//String Literal Types
//The variable must hold one OR another string
type headsOrTailsResult = 'heads' | 'tails';

function flipCoin(): headsOrTailsResult {
  return Math.random() > 0.5 ? 'heads' : 'tails';
}

const result = flipCoin();

// Intersection Types
function getPetInsurance(pet: Animal & { chipId: string }): Insurance {
  // Code here will deal with animal instances
  // AND enhanced animal instances with chipIds
}

// Type Casting
let nameInput = document.querySelector('#name') as HTMLInputElement;
// When we change something's type:
let enteredText = (nameInput as HTMLInputElement).value;
let nameInput = document.querySelector('#name');
nameInput.value; // throws an error
// We can use the as keyword:
// or the <> operator:
let nameInput = <HTMLInputElement>document.querySelector('#name');
