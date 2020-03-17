// has two different types of scope. They mater for var and where they are declared. 

var x = 12

function scope() {
    var x = 33; //<--- Local scope
    if(true){
        let x = 45
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);