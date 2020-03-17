//Boolean

let on = true;   
console.log(on);

let off = false;
console.log(off);

//Null
let empty = null;

//undefined 
let undef;
//same as let undef = undefined

//numbers
let degrees = 90;

let precise = 999999999999999;
console.log(precise);

let toomuch = 9999999999999999n;
console.log(toomuch);

let notQuite = 0.2 + 0.1;
console.log(notQuite); 

//BigInt deals with all the numbers beyond the 15 character limit and put n on the end of the number and runs it. 
//console.log(typeof toomuch);

//string
let stringOne = 'single quotes are cool';
let stringTwo = "double quotes";
let stringThree = `backticks`;

// Addition
let first = 1050 + 100;
//string concatenation
let second = '1050' + '100';
console.log(first, second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

const firstName = 'Mariah';
let lastName = 'Curl';
let houseNumber = 4358;
let street = 'N Somerset Dr';
let city = 'Martinsville,';
let state = 'IN';
let zipcode = 46151;

console.log(firstName,lastName);
console.log(houseNumber, street, city, state, zipcode);

//objects = container that can hold multiple data types
let firstObject = {
    integer: 50,
    stringOne: 'hello world',
    isRemote: true,
};

console.log(firstObject);
//console.log(typeof firstObject);

//Array

let firstArray = ['Spanish', 'English', 'French', 'Dutch'];

/*
let first array + [
    0 : "Spanish"
    1 : "English"
    2 : "French"
    3 : "Dutch"
]
*/

console.log(firstArray[0]);