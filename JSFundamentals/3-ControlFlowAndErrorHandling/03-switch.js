/*let friend = "Tom";

switch (friend){
    case "Tom":
        console.log("Hey Tom! You wanna go rock climbing?");
        break;
    case "Kenn":
        console.log("Hey Kenn, want to play Catan?");
        break;
    case "Carolyn":
        console.log("Hey Carolyn, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry ${ friend }, but do I know you?`);
};*/

// if you don't include break it will run until a break is hit, even if the statement is not true.

//challenge

let dessert = "ice cream";

/*switch (dessert){
    case "pie":
        console.log("Pie, pie, pie, me oh my");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream");
        break;
    default:
        console.log(`Sorry ${dessert}, is not on the menu.`);
};*/

//multiple conditions

let yup = -8;

switch ( true ) {
    case (yup < 0 && yup > -10):
        console.log('Worked');
        break;
    case ( yup > 0 ):
        console.log('Worked!');
        break;
    default:
        console.log("didn't work.");
};