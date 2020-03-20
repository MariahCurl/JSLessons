
/*let myList = ['thing1', 'thing2', 'thing3', [1, 3, 4]];

myList[3][1];

let colors = [];

console.log(colors);
colors.push('Red')      // this pushes into the last position in the array
console.log(colors);


colors.pop();           //takes the past thing in the array out.
console.log(colors);

//colores removed from the end
let removed = colors.pop()
console.log(colors);
console.log(removed);

let orders = ['Mary', 'Tim', 'Greg', 'Dolph', 'Ashley'];

orders.splice(1, 1, 'Donovan');
orders.splice(3, 0, 'Adam');        //1st para. = what pos. 2nd para. = how many items to remove.
console.log(orders);

let shifted = orders.shift();
console.log(orders);
console.log(shifted);

orders.unshift();
console.log(orders);

//challenge

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


let foods = ['Pecan Pie', 'shrimp', 'Quesadilla', 'Hot Dog', 'Chana Masala'];

/*
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

for ( i in foods) {
    console.log(foods[i]);
}

for (food of foods) {
    console.log(food);
}

foods.forEach(food => console.log(food));

foods.forEach( (x, y, z) => console.log(x, y, z) );

console.log(typeof foods);*/

//console.log( foods instanceof Array );
//console.log(typeof 3 == "number")

//challenge

let num = [ 5, 4, 3, 2, 1 ]

let reverseArray = (toReverse) => {
    if (toReverse instanceof Array){
        toReverse.reverse();
    }
}

reverseArray(num);
num.forEach(input => console.log(input))

// console.log('Before: ');
// num.forEach(input => console.log(input))

// if (num instanceof Array) {
//     num.reverse();
// }

// console.log('After: ')
// num.forEach(input => console.log(input))

