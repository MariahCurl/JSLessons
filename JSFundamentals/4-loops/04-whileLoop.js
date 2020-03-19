
let x = true;
let i = 0;

while (x) {
    i++
    if (i===5) {
        x = false;
    }
    console.log(i);
}

while (i < 10) {
    let v = 8;                

    while(true) {
        v--;
        if (v === 0) {
            break; //This just breaks out of the 1st loop.
        }
        console.log(v);
    }
    
    console.log('TESTING');
    i++

}

// DO WHILE loop

do {
    //code block here
} while (true){          //condition goes here
    //code block here
}