// 1. Arrays
// 2. Array.isArray(arrayName)
// 3. push
// 4. pop 
// 5. shift 
// 6. unshift 
// 7. primitive vs reference type 
// 8. clone an array 
// 9. for loop in array
// 10. const for creating array 
// 11. array destructuring


// ____________________________________________________
// - Arrays: ordered collection of heterogeneous elements
// - Ordered collection means: it is indexable
// - Arrays are mutable, i.e. changes the original
// - Array is reference type: Reference type are known as object
// - Array is an object

let fruits = ["apple", "mango", "peach"];
console.log(fruits[2]);

let numberArr = [1,2,3,4];

let mixedArr = ["apple", 2, 3.4, null, undefined];
console.log(mixedArr);
mixedArr[3] = "Mango";
console.log(mixedArr);


// ____________________________________________________
console.log(typeof mixedArr);
console.log(Array.isArray(mixedArr));


// ____________________________________________________
//push
let dbz = ["goku", "vegeta", "gohan", "trunks"];
console.log(dbz);
dbz.push("bulma");
console.log(dbz);


// ____________________________________________________
//pop
let dbz1 = ["goku", "vegeta", "gohan", "trunks"];
console.log(dbz1);
let poppedElem = dbz1.pop();
console.log(dbz1);
console.log(poppedElem);


// ____________________________________________________
// unshift: adds in the starting
let dbz2 = ["goku", "vegeta", "gohan", "trunks"];
console.log(dbz2);
dbz2.unshift("Bulma");
console.log(dbz2);


// ____________________________________________________
// shift: removes from the starting
let dbz3 = ["goku", "vegeta", "gohan", "trunks"];
console.log(dbz3);
let shiftedElem = dbz3.shift();
console.log(dbz3);


// ____________________________________________________
// primitive
// - primitive type variables are stored inside STACK 
let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);

//reference type: 
// - arr1 stores the address of 1st element, and not complete array
// - In reference types, STACK stores the address of array's first element
// - HEAP stores the actual complete array of values
let arr1 = ["jethalal", "sodhi", "tarak", "hathi"];
let arr2 = arr1;
arr1.push("iyer");
console.log(arr1);
console.log(arr2);


// ____________________________________________________
// clone an array: creat a copy

let a1 = ["babita", "anjali"];
let a2 = a1; // deep copy/ same arrays

console.log(a1===a2); // returns true

let a3 = ["babita", "anjali"]
console.log(a1===a3); // returns false: because both are different arrays, i.e. addresses

// to create copy
let a4 = a1.slice(0);
console.log(a1);
console.log(a4);

let a5 = [].concat(a1);
console.log(a1);
console.log(a5);

//copy using spread operator
let a6 = [...a1];
console.log(a1);
console.log(a6);
console.log(a1===a6); 

// -> slice is fastest

let a7 = [...a1, "daya", "komal"];
console.log(a1);
console.log(a7);


// ____________________________________________________
// for loop in array
// - for loop
// - for in 
// - for of
// - while


// ______________________________
//for loop
let Tmkoc = ["Jethalal", "Sodhi", "Bhide", "Popatlal", "Iyer"];
let arrTmkoc = [];
for(let i=0; i<Tmkoc.length; i++){
    console.log(Tmkoc[i]);
    arrTmkoc.push(Tmkoc[i].toUpperCase());
}
console.log(arrTmkoc);

// ______________________________
// while loop
let Tmkoc1 = ["Jethalal", "Sodhi", "Bhide", "Popatlal", "Iyer"];
let i=0;
while(i<Tmkoc1.length){
    console.log(Tmkoc1[i]);
    i++;
}

// ______________________________
// for of 
let Tmkoc2 = ["Jethala2", "Sodhi", "Bhide", "Popatlal", "Iyer"];
for(let character of Tmkoc2){
    console.log(character);
}

// ______________________________
// for in 
let Tmkoc3 = ["Jethala3", "Sodhi", "Bhide", "Popatlal", "Iyer"];
for(let characterIndex in Tmkoc3){
    console.log(characterIndex, Tmkoc3[characterIndex]);
}


// ____________________________________________________
// const for creating an array
const singers = ["arijit", "sonu", "ketty", "taylor"];
singers.push("Devanshu");  // we can push element in a const array, since we are not manipulating address
console.log(singers);

// singers = ["justin", "charlie"]; // error: Assignment to constant variable.


// ____________________________________________________
// array destructuring 
const myArray = ["value1", "value2", "value3"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("value of myVar1 is", myVar1);
console.log("value of myVar2 is", myVar2);

let [myV1, myV2, myV3, myV4] = myArray;
console.log("value of myV1 is", myV1);
console.log("value of myV2 is", myV2);
console.log("value of myV3 is", myV3);
console.log("value of myV4 is", myV4);

let [myVa1, , myVa3, myVa4] = myArray;
console.log("value of myVa1 is", myVa1);
// console.log("value of myVa2 is", myVa2); // error : myVa2 is not defined
console.log("value of myVa3 is", myVa3);
console.log("value of myVa4 is", myVa4);

let [myVari1, ...myVari] = myArray;
console.log("value of myVari1 is", myVari1);
console.log("value of myVari is", myVari);