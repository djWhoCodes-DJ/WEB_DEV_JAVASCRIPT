// 1. How Javascript works
//  



// ________________________________________________________
// How javascript works
// -> Javascript is a compiled language
// -> Firstly, in the compilation phase: 
//            -> Tokenizing / Lexing : Code is broken down into, small chunks
//            -> Parsing : `Abstract Syntax Tree` is created out of those small code blocks or tokens
//            -> Code Generation : An executable code is generated via AST
//    -> Ecmascript does not say, the code must be compiled. Rather it says:
//        -> Early Error Checking before execution
//        -> Determining Scope for Variables before execution
//    -> Above 2 points represent compilation
// -> Secondly, Code Execution Phase: 
//      -> In Javascript, code executes inside execution phase
// -> Javascript is a `synchronous` programming language : Means until the complete execution of first line, second won't execute
// -> Javascript is single threaded : execution will be one at a time
// -> While in compilation: 
//        -> Variables created using `var` will be set to undefined
//        -> variable's, values are set while in execution phase and not in compilation phase
// -> Functions created using function keyword, are also declared in Global Execution Phase, complete code of function is defined inside GEP


// Hoisting
//  -> Declaring and Definitions of variables and functions in the memory, before code execution
//  -> Variables and functions, being added to the memory or Glpbal Execution Scope, before the actual execution.

//  -> Functions created by function expressions using var keyword: will be set to undefined


// console.log(fisrtName);   // Error : fisrtName is not defined
// console.log(lastName);   // Error : annot access 'lastName' before initialization
// let lastName;


//  -> Variables created using let and const are added in the memory or GEC, but are not initialised
//  -> Since let and const variables are added to the memory, there is also hoisting



