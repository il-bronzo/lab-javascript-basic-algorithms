// Iteration 1: Names and Input
const hacker1 = "Andrea";
const hacker2 = "Sven";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driver = "Andrea";
const navigator = "Sven";
//const driverLeng

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
} else if (driver.length === navigator.length) {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
    
}

// Iteration 3: Loops
/*let nameUpper= "";
for (character of driver) {
    let nameUpper = nameUpper + character;
   
}
console.log(nameUpper.toUpperCase());*/

let upperName = "";
for (let i=0; i<driver.length; i++) {
    const upperLetter = driver[i].toUpperCase();
    upperName += upperLetter + " ";
}
console.log(upperName);


let upperNameReversed = "";
for (let i=navigator.length-1; i<navigator.length && i>=0; i--) {
    const upperLetter = navigator[i].toUpperCase();
    upperNameReversed += upperLetter + " ";
}
console.log(upperNameReversed);

const lexic_order= driver.localeCompare(navigator);
switch (lexic_order) {
    case -1:
        console.log("The driver's name goes first.");
        break;
    case 1:
    console.log("Yo, the navigator goes first, definitely.");
        
        break;

    default:
     console.log("What?! You both have the same name?")   
        break;
}