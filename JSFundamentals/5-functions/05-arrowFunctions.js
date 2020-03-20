let hello = () => console.log("Hello");     //this is shorthand function

function hi(){
    console.log("Hello");
}

hi();           // this can be called before or after.
hello();        // this needs to be called below. ArrowFunctions don't get hoisted