// 1. String Indexing
// 2. string length 
// 3. last index 
// 4. Strings are immutable, methods don't change them
// 5. The methods return a new string
// 6. String methods 
//    - trim()
//    - string.replace("searchValue", "replaceValue")
//    - toUpperCase()
//    - toLowerCase()
//    - slice(startIndex, endIndex) :endIndex is excluded
//    - string.split(" ").join("")


// ____________________________________________________
let firstName = "Devanshu";

// D e v a n s h u
// 0 1 2 3 4 5 6 7

console.log(firstName[0]);
console.log(firstName[3]);


// ____________________________________________________
let dbz = "Vegeta";
console.log(dbz.length) // length is a property


// ____________________________________________________
console.log(dbz[dbz.length-1])


// ____________________________________________________
//trim() : trims extra space from 'start' and 'end' only
//       : does not change original string 
let myName1 = "Devanshu   ";
console.log(myName1.trim()) ;
console.log(myName1) ;
console.log(myName1.trim().length) ;
let myName2 = "       Devanshu";
console.log(myName2.trim()) ; 
let myName3 = "    Devanshu   " ;
console.log(myName3.trim()) ;

let myName4 = "Devanshu   Jain" ;
console.log(myName4.trim()) ;

//replace()
let myName5 = "Dragon         Ball    Z   " ;
var regexPattern = /\s+/g ;
// Here, “\s” is used for the spaces, “+” sign indicates all the spaces in a string, and “g” is the global flag which is added to search the full string and identify spaces
console.log(myName5.replace(regexPattern, " ")) ;

//toUpperCase() :poornataha
let myName6 = "devanshu" ;
console.log(myName6.toUpperCase()) ;

//toLowerCase() 
let myName7 = "GoKu";
console.log(myName7.toLowerCase());

//slice()
let myName8 = "Devanshu Jain"
console.log(myName8.slice(1,7))

//split
// split() splits a string into an array of substrings, and returns the array:
let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray)




