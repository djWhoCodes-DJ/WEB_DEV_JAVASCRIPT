// 1. let keyword
// 2. var vs  let 
// 3. const

"use strict"

// ____________________________________________________
let firstName = "Goku" ;
console.log(firstName) ;


// ____________________________________________________
var dbz = "Goku" ;
var dbz = "Vegeta" ; //does not generate an error , not even with "use strict"

let marvel = "IronMan" ;
// let marvel = "Thor" ; //generates an error : Identifier 'marvel' has already been declared


// ____________________________________________________
// declare constants
const pi = 3.14;
console.log(pi)
// pi = 4; // generates an error : Assignment to constant variable.