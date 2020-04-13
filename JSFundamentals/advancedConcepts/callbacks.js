let outer = cb => {
    console.log ('Before the Callback');
    cb();
};

let inner = () => {
    console.log('I am the callback');
}

outer(inner);