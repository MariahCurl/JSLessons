//block arrow functions and using return. Return throws data outside of the block. 
let hi = () => {
    return "hi";
}

let hello = hi();

console.log(hello);


let capName = (name) => {                   //With 1 parameter you don't need ()
    let capitalizedName = "";

    for(let letter in name) {
        if (letter == 0){
            capitalizedName += name[letter].toUpperCase();
        } else {
            capitalizedName += name[letter].toLowerCase();
        }
    }
    console.log(capitalizedName);
    return capitalizedName;
}

let myName = capName("mARiAh");

console.log(myName);

//challenge tip calculator

/*let bill = (tip) => {
    let money = "";
    
    for (let amount in tip) {
        if (amount == 0) {
            money += tip
        } else {
            money += tip
        }
    }

}*/

let getTip = amount => {
    amount *= 100;
    amount = Math.round(amount / 5)/100
    return amount;
};

let tipOfMyCoffee = getTip(4.59);
console.log(tipOfMyCoffee);


//consise body

let tipCalc = bill => bill * 0.2
let totalTip = tipCalc(19.72);

console.log(totalTip);