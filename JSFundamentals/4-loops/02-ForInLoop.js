//forInLoop
let student = { 
    name : 'Mariah',
    awesome : true,
    degree : 'JavaScript',
    week : 1
}

for ( item in student ) { //item is just a temporary place holder for the key. It can be named anything.
    console.log('key =>', item)
    console.log('value =>', student[item]);
}

let catArray = [ 'saimese', 'tabby', 'farel', 'sphynx', 'lazy']

/*for ( cat in catArray ) {
    console.log(catArray[cat]);
}

let aCat = catArray[] // lets you grab a specific key
// a for-In loop allows you to grab the keys in an object, or the index in an array.

//challenge 

/*let studentName = 'dOllPH';
let newName = '';

for ( name in studentName){
    if (chat >0) {
        newName = name + studentName[name].toLowerCase();
    } else {
        newName = newName + studentName[name].toUpperCase();
    }
}
console.log(newName);

for ( name in studentName){
    studentName = studentName.charAt(0).toUpperCase() + studentName.charAt(1).toLowerCase();
}

console.log(studentName);*/


