// 1. if else 
// 2. ternary operator 
// 3. and or operator 
// 4. prompt
// 5. if    else if    else if    else
// 6. switch 


// ____________________________________________________
let age = 2;
if(age>17){
    console.log("user can vote")
}
else{
    console.log("user cannot vote")
}

let stringVar = "Devanshu";
if(stringVar){
    console.log("Good");
}
else{
    console.log("Great");
}


// ____________________________________________________
let age100 = 15;
let drink;

// if(age100>=5){
//     drink = "milk";
// }
// else{
//     drink = "coffee";
// }

(age100>=5) ? (drink = "milk") : (drink = "coffee");
drink = (age100>=35) ? "milk" : "coffee";

console.log(drink);


// ____________________________________________________
let firstName = "Harshit";
let age200 = 22;

if(firstName === "Harshit" || age200 > 38){
    console.log("You are a great teacher.");
}
else{
    console.log("Else block");
}

if(firstName === "Harshit" && age200 > 38){
    console.log("You are a great teacher.");
}
else{
    console.log("Else block");
}


// ____________________________________________________
//prompt: takes input in string
// let winningNumber = 19;
// let userGuess = prompt("Guess a number :")
// console.log(typeof userGuess, userGuess);
// userGuess = Number(userGuess);
// console.log(typeof userGuess, userGuess);


// ____________________________________________________
let temp = 25;

if(temp < 0){
    console.log("Freezing cold");
}
else if(temp < 16){
    console.log("Kambal Mode On");
}
else if(temp < 26){
    console.log("Rajai or Chaddar");
}
else{
    console.log("Haaye Garmi!");
}


// ____________________________________________________
let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid!")
}