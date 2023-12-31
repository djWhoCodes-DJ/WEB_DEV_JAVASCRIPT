// 1. call, apply, bind 
// 2. arrow functions 
// 3. Object creation using Object.create()
// 4. proto, prototype, class
// 5. A good practice to create, multiple objects using same properties and methods
// 6. proto and prototype mixed practice
// 7. new keyword
// 8. class 
// 9. Inheritance
// 10. super
// 11. getters and setters
// 12. static methods and properties




// _______________________________________________________________
// call
//  - parentObject.callingFunction.call(childObject) 
// - child object determines the 'this' of parent object
const user1 = {
    fName : "Devanshu", 
    age : 22,
    about : function(){
        console.log(this.fName, this.age);
    },
    hobby : function(instrument, singer){
        console.log(`${instrument} and ${singer}`);
    }
}

const user2 = {
    fName : "Devu", 
    age : 23,
}

user1.about();
user1.about.call(user2);  //user2 borrows from user1
user1.about.call();  // undefined undefined
user1.hobby.call(user2, "Guitar", "Shawn Mendes");


// _______________________________________________________________
// apply : same as call
user1.about();
user1.about.apply(user2);
user1.hobby.call(user2, ["Guitar", "Shawn Mendes"]); // in case of call, array of elems is considered as 1.
user1.hobby.apply(user2, ["Guitar", "Shawn Mendes"]);


// _______________________________________________________________
// bind : returns a function
function about(hobby, favMusician){
    console.log(this.fName, this.age, hobby, favMusician);
}

const user3 = {
    fName : "Jethalal", 
    age : 50,
}

const user4 = {
    fName : "Daya", 
    age : 45,
}

const func1 = about.bind(user3, "guitar", "Shawn Musician");
func1();
const func2 = about.bind(user4, "guitar", "Shawn Musician");
func2();


// _______________________________________________________________
const u1 = {
    fName : "Devanshu",
    age : 22,
    about : function(){
        console.log(this.fName, this.age);
    }
}

const myFunc = u1.about;
myFunc(); // undefined undefined

// why?
const myFunc1 = function(){
    console.log(this.fName, this.age);  //here 'this' is window object
};
myFunc1(); // functionCaller is window object

const myFunc2 = u1.about.bind(u1);
myFunc2(); // Devanshu 22



/// _______________________________________________________________
// arrow functions : arrow function ka "this" nahi hota
// arrow function takes "this" from its parent elem. object's "this" will be window's "this"


// _______________________________________________________________
// Object creation using Object.create() : returns an empty array

const objPar = {
    key1 : "Value1",
    key2 : "Value2",
    key3 : "Value45"
}

const objCh1 = Object.create(objPar); // creates an empty object, but has Parent methods in it
objCh1["key3"] = "Value3";
objCh1["key4"] = "Value4";

console.log(objCh1.key4);


// __proto__   &   [[prototype]]
//      - Both are same thing
//      - __proto__ is the parent object, from where methods and properties will be inherited by the child object

console.log(objCh1);
console.log(objCh1.__proto__);


// _______________________________________________________________
// A good practice to create, multiple objects using same properties and methods.

const displayInfo = {
    is50(){
        return "Above 50";
    },

    displayFullName(){
        return this.fName +" "+ this.lName;
    }
}

function userDetails(fName, lName, email, age){
    const user = Object.create(displayInfo);  //Inner field cannot be left empty
    user["fName"] = fName;
    user["lName"] = lName;
    user["email"] = email;
    user["age"] = age;
    return user;
}

const student1 = userDetails("Jethalal", "Gada", "jg@gmail", "50");
const student2 = userDetails("Taarak", "Mehta", "tm@gmail", "54");
const student3 = userDetails("Roshan", "Sodhi", "rs@gmail", "45");
const student4 = userDetails("Hansraj", "Hathi", "hh@gmail", "57");

console.log(student1);
console.log(student1.displayFullName());
console.log(student2);
console.log(student2.displayFullName());



// _______________________________________________________________
// prototype
//    - prototype is an object, provided inside the functions
//    - only functions provide prototype
//    -   

function hello(){
    return "hello world";
}

// hello.prototype = {}
hello.prototype["key1"] = "Value1";
hello.prototype["key2"] = "Value2";
hello.prototype["key3"] = "Value3";
hello.prototype["sing"] = function(){
    return "I can sing!";
}

console.log(hello);
console.log(hello.prototype.sing());


// _______________________________________________________________
// proto and prototype mixed practice

// const displayInfoNew = {
//     is50(){
//         return "Above 50";
//     },

//     displayFullName(){
//         return this.fName +" "+ this.lName;
//     }
// }

function userDetailsNew(fName, lName, email, age){
    const user = Object.create(userDetailsNew.prototype);  
    user["fName"] = fName;
    user["lName"] = lName;
    user["email"] = email;
    user["age"] = age;
    return user;
}

userDetailsNew.prototype["is50"] = function is50(){
    return "Above 50";
}

userDetailsNew.prototype["displayFull"] = function displayFullName(){
    return this.fName + " " + this.lName;
}

const studentNew1 = userDetailsNew("Jethalal", "Gada", "jg@gmail", "50");
const studentNew2 = userDetailsNew("Taarak", "Mehta", "tm@gmail", "54");
const studentNew3 = userDetailsNew("Roshan", "Sodhi", "rs@gmail", "45");
const studentNew4 = userDetailsNew("Hansraj", "Hathi", "hh@gmail", "57");

console.log(studentNew1);
console.log(studentNew1.displayFull());
console.log(studentNew2);
console.log(studentNew2.displayFull());


// _______________________________________________________________
// new keyword
//    - creates an empty object "this"
//    - automatically returns "this" object
//    - "new" keyword makes link between __proto__ and prototype
//    - Below, example, "createUser.prototype" is the prototype because it is the automatically generated object by function. Also, since "createUser.prototype"  holds all the non-direct functions it is also known as "__proto__".

//constructor function
function CreateUser(fName, age){
    this.fName = fName;
    this.age = age;
}
CreateUser.prototype["about"] = function(){
    console.log(this.fName, this.age);    
}

const emp1 = new CreateUser("Devanshu Jain", 22);
console.log(emp1);
emp1.about();

console.log(CreateUser.__proto__);
console.log(CreateUser.prototype);

for(let key in emp1){
    console.log(key);
}

console.log("")
for(let key in emp1){
    if(emp1.hasOwnProperty(key))
    console.log(key);
}


//Constructor functions
const arr1 = [1,2,3,4,5];
console.log(arr1);


const arr2 = new Array(6,7,8,9,10);
console.log(arr2);

//Array creation in 1st(arr1), follows the procedure of 2nd(arr2), that's why we can use methods on writing ".". Because only functions provide prototype



// _______________________________________________________________
// class: Everything we did abpve using function and prototype is done using class

class CreateUser1{
    constructor(fName, lName, age, email){
        console.log("Constructor called!")
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.email = email;
    }

    about(){
        console.log("I am about in class");
    }
    displayInfo(){
        console.log("I am display in class");
    }
}

const emp2 = new CreateUser1("Ajay", "Raj", 23, "aj@email");
// console.log(emp2);
console.log(Object.getPrototypeOf(emp2));



// _______________________________________________________________
// Inheritance
// Object is also known as Instance

class Animal{

}

class Dog extends Animal{

}

const tommy = new Dog();



// _______________________________________________________________
// super

class Human{
    constructor(name, age){

    }
}

class student extends Human{
    constructor(name, age, rollNo){
        super(name, age);  //These will be initialised in Human Constructor
        this.rollNo = rollNo
    }
}

const s1 = new student("Devanshu", 22, 31);

// _______________________________________________________________

// const obj300 = {
//     "funName" : function(){}  === funName(){}
// }

// getters and setters

//getter: to make a function act as a property
class kingdom{
    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
    }

    get displayDetails(){
        return this.fName + " " + this.lName;
    }
}

const bheem = new kingdom("chota", "bheem", 16);
console.log(bheem.displayDetails)



// _______________________________________________________________
// static methods and properties
class School{
    static principal(){
        console.log("Eat your greens!");
    }

    static desc = "static proeprty";
}

School.principal();  //No need to create object
console.log(School.desc);