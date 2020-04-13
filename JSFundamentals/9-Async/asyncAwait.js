let myFn = async() => {
    return "Hello there";
};
 
async function foo() {
    try {
        let response = await fetch("http://random.dog/woof.json"); //this replaces .then
        let json = await response.json();
     } catch(err) {
        console.error(err);
    }
}

foo();