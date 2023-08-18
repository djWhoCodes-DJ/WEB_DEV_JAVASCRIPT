// 1. Functions 
// 2. Function Expression
// 3. Arrow function 
// 4. Hoisting 
// 5. function inside function 
// 6. Lexical Scope 
// 7. block scope vs function scope 
// 8. Default parameters 
// 9. rest parameter
// 10. Parameter destructuring 
// 11. Higher order function 
//       - callback functions
//       - function returning function



// __________________________________________________
//Function
function sumTwoNumbers(Number1, Number2){
    return Number1 + Number2;
}

const result = sumTwoNumbers(4,25);
console.log(result);

console.log(undefined + undefined);

const result1 = sumTwoNumbers();
console.log(result1);

const result2 = sumTwoNumbers(2);
console.log(result2);


function findInArray(array, key){
    for(let i in array){
        if(array[i]===key){
            return i;
        }
    }
    return -1;
}

const myArr = [1,2,3,4,5,6];
const result3 = findInArray(myArr, 14);
console.log(result3);


// __________________________________________________
//Function Expression

// function singHappyBirthday(){
//     console.log("Happy Birthday To You...");
// }

const singHappyBirthday = function(){
    console.log("Happy Birthday To You...");
}

singHappyBirthday();


// __________________________________________________
// Arrow Function
const arrowFunction = () => {
    console.log("Hello World!");
}

arrowFunction();


// const isEven = (num) => {
//     return num%2 === 0;
// }

const isEven = (num) => num%2===0 ;

console.log(isEven(4));


// __________________________________________________
// hoisting
 
hello1(); //calling before declaring waali line
function hello1(){
    console.log("Function Declaration");
}

// hello2(); //error: Cannot access 'hello2' before initialization
// const hello2 = function (){
//     console.log("Function Declaration");
// }

// hello3(); //error: Cannot access 'hello2' before initialization
// const hello3 = () => {
//     console.log("Function Declaration");
// }


// __________________________________________________
//function inside function
function app(){
    const myFunc = () => {
        console.log("Hello from myFunc");
    }
    myFunc();
}

app();


// __________________________________________________
// lexical scope
const myVar = "value48";
function myLexFunc(){
    // const myVar = "value1";
    function myFunc() {
        // const myVar = "value59";
        console.log("Inside Function Declaration", myVar); //no error: because it will receive it from lexical scope
    };
    const myFunc2 = function() {};
    const myFunc3 = () => {};
    console.log(myVar);
    myFunc();
}

myLexFunc();


// __________________________________________________
// - let and const are block scope
// - var is global scope 

{
    let var1 = "Hello" ; 
    const var2 = "Hi" ;
    var var3 = "Hey" ;
}

// console.log(var1); // Error : var1 is not defined
// console.log(var2); // Error
console.log(var3);

{
    const Name = "Devanshu";
    console.log(Name);
}

{
    const Name = "Jethalal";
    console.log(Name);
}

{
    const Name = "Devanshu";
    // const Name = "Jethalal"; // error : Identifier 'Name' has already been declared
    {
        const Name = "Taarak" ; // Error : Assignment to constant variable.
        console.log(Name);
    }
}


// __________________________________________________
// Default Parameters 

function addTwoNums(a, b=0){
    return a+b;
}

console.log(addTwoNums(4, 5));
console.log("");


// __________________________________________________
// Rest Parameters 
function myFunc4(a, b, ...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

myFunc4(2,3,4,5,6);


// _________________________________
function addAll(...nums){
    let ans = 0;
    for(let val of nums){
        ans += val;
    }
    return ans;
}

console.log(addAll(3,3,4,5,6));


// __________________________________________________
//Parameter Destructuring
const dbz = {
    Name : "Goku",
    Sport : "Fight"
}

function printObj({Name, Sport}){
    // console.log(Fname); // error: varName should be same as in Object
    console.log(Sport);
    console.log(Name);
}

printObj(dbz);


// __________________________________________________
// callback functions : means function passes as an argument

function fun1(callback){  //There is a convention to name parameter "a" as "callback"
    console.log(callback);
    callback("Devanshu");
}

function fun2(Name){
    console.log("Fun2", Name);
}

fun1(fun2);


// __________________________________________________
// function returning function
function fun100(){
    function fun300(){
        console.log("Hello");
    }
    return fun300;
}

const ans = fun100();
console.log(ans);
ans();