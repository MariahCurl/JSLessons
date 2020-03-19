/*for ( let i = 0; i < 10; i++) { //i++ just means increment by 1. The loop will continue to run until i is more than 10.
    console.log(i);
}; 

// challenge

for ( let i = 0; i <= 20; i += 2){
    console.log(i);
}; 

//challenge

let name = "Ada"

for ( let i = 0; i < name.length; i++ ) {
    console.log(name[i]);
}*/

//challenge 

let sum = 0 //you use a outside variable to catch i so that it is added to itself. Otherwise i is reset to 0.

for  ( i = 0; i <= 50; i++) {
    sum = sum + i; //can also be written as sum += 1 for short hand. 
    console.log(sum); //console log can be outside of the forloop to limit output. 
};

