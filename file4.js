// 1. primitive datatypes 
// 2. typeof operator 
// 3. convert number to string 
// 4. convert string to number 
// 5. string & number arithmetic
// 6. string concatenation
// 7. template string 
// 8. truthy falsy values


// ____________________________________________________
// String
// Number
// Boolean
// undefined
// null
// BigInt
// Symbol


// ____________________________________________________
// typeof
let age = 22;
let fname = "Devanshu"
console.log(typeof age);
console.log(typeof fname);


// ____________________________________________________
// number to string 
age = age + "";
console.log(age);
console.log(typeof age);
let newNum = 42;
newNum = String(newNum);
console.log(typeof newNum);


// ____________________________________________________
// string to number 
let myNum = "37";
console.log(typeof myNum)
myNum = +myNum;
console.log(typeof myNum);

let myNum2 = "37";
myNum2 = Number(myNum2)
console.log(typeof myNum2) 


// ____________________________________________________
let nNum1 = 31;
let nNum2 = 31;
let result1 = nNum1 + nNum2;
console.log(result1);
console.log(typeof result1);

nNum1 = 31;
let sNum2 = "31";
let result2 = nNum1 + sNum2;
console.log(result2);
console.log(typeof result2);

nNum1 = 31;
nNum2 = 31;
let result3 = nNum1 - sNum2;
console.log(result3);
console.log(typeof result3);

nNum1 = 31;
sNum2 = "31";
let result4 = nNum1 - sNum2;
console.log(result4);
console.log(typeof result4);


// ____________________________________________________
// string concatenation
let string1 = "Devanshu";
let string2 = "Jain";

let fullName = string1 + " " + string2;
console.log(fullName)


// ____________________________________________________
let roll = 31;
let lName = "Jain";

let result = `my last name is ${lName} and my roll is ${roll} and i am not a terrorist.`;
console.log(result)


// ____________________________________________________
// undefined : when you declare a variable and not assign it a value 
let newVar;
console.log(typeof newVar);
// const newVarCons; //error : Missing initializer in const declaration
console.log(typeof newVarCons)


// ____________________________________________________
let var100 = null;
console.log(var100);
console.log(typeof var100);


// ____________________________________________________
// BigInt 
let var101 = 102;
console.log(Number.MAX_SAFE_INTEGER)
let var102 = 123456789987654323456;
console.log(var102) // o/p: 123456789987654320000 - wrong representation
let var103 = 123456789987654323456n;
console.log(var103);

// let result100 = var101 + var103; //error : Cannot mix BigInt and other types
// console.log(result100);


// ____________________________________________________
// Boolean : true/false
let var200 = 34;
let var201 = "34";
console.log(var200==var201); //return true
console.log(var200===var201); //return false
console.log(var200!==var201); //return true
console.log(var200!=var201); //return false


// ____________________________________________________
// truthy and falsy

// falsy values:
// "" : empty string
// undefined
// null
// false
// 0

// truthy : rest are truthy, "string", number everything



