/*function greeting(){
    console.log('Hello Friend.');
}

let hal = function(){
    console.log("I'm sorry dave, but I cannot do that.");
}

//invoking functions to get them to run.
greeting();

hal();*/

//CHALLENGE : Calling individual values from an array.

let arr = ["this", "is", "really", "cool"];

function info(){
    for (items in arr) {
        console.log(arr[items]);
    }
};

info();

function info(){
    for (items of arr) {
        console.log(items);
    }
};

info();