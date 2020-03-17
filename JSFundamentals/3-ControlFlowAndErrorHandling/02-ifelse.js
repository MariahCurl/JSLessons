/*let weather = 50;

if (weather > 50){
    console.log("No jacket needed.");
} else {
    console.log("Wear a jacket.");
};

//challenge


let name = "Mariah";

if (name === "Mariah") {
    console.log(`Hello, My name is ${Mariah}`);
} else {
    console.log(`Hello, is your name, ${Mariah}?`);
};*/


//challenge 2

let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()){
    let fixedString = name[0] + name.slice(1).toLowerCase();
    console.log(fixedString);
} else {
    let  firstLetter = name[0].toUpperCase();
    let restOfName = name.slice(1).toLowerCase();
    let fullName = firstLetter + restOfName;
    console.log(fullName);
};