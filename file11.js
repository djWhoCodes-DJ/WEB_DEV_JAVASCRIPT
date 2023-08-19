// 1. Iterables vs Array like objects 
// 2. set 
//     - has method
//     - for of loop
// 3. Maps
// 4. cloning object
//    - Object.assign()
// 5. optional chaining
// 6. methods



// __________________________________________________
// Iterables 
//    - jispe hum, for of loop laga sakein
//    - string, array are iterables
//    - objects are not iterables

// Array like objects
//     - jinke pass length property hoti hai 
//     - jinko hum index se access kar sakte hain 
//     - string 


// __________________________________________________
//  Sets(It is iterable)
//    - stores data linearly
//    - sets ahave its own methods 
//    - no index-based access 
//    - order is not guaranteed
//    - unique items only 

const numbers = new Set([1,2,3,4,3]);
console.log(numbers);
console.log(numbers[2]); // undefined

const numbers1 = new Set("Devanshu");
console.log(numbers1);

const nums = new Set();
nums.add(1);
nums.add(2);
nums.add(3);
nums.add(2);
nums.add("Mango");
nums.add(["Apple", "Grapes"]);
nums.add(["Apple", "Grapes"]);

console.log(nums);

console.log(nums.has("Mango")); //true
console.log(nums.has(["Apple", "Grapes"]));  //false

for(let num of nums){
    console.log(num);
}

const myArr = [1,2,2,3,3,4,5,6];
const mySet = new Set(myArr);
console.log(mySet,"->", mySet.length);

let len = 0;
for(let elem of mySet){
    len++;
}
console.log(len);


// __________________________________________________
// Maps 
// map is an iterable
// stores data in ordered fashion 
// stores key-value pairs (like objects)
// duplicate keys are not allowed like objects 

// diiference b/w maps and objects 
// objects can only have string or symbol as key 
// in maps, we can use anything as keys like: Array, number, string 


//creation of maps
const person = new Map();
person.set('firstname', "Devanshu");
person.set('age', 22);
person.set(5, "five"); 
person.set('[1,2,3,4]', "onetwothreefour");

console.log(typeof person); // object
console.log(person);

console.log(person.get('firstname'));
console.log(person.get('age'));
console.log(person.get(5));
console.log(person.get('[1,2,3,4]'));

console.log(person.length); //undefined

for(let key of person.keys()){
    console.log(key, person.get(key));
}

for (let key of person){
    console.log(key, Array.isArray(key));
}

for (let [key, value] of person){
    console.log(key, value);
}


const employee = new Map([[1, "Devanshu"], [2, "Rahul"]]);
console.log(employee);


// __________________________________________________
//cloning object
// objects are reference type, i.e. they store the addresses
const obj1 = {
    Name : "Devanshu",
    age : 22
}

const obj2 = obj1;

obj1['gender'] = 'male';

console.log(obj1);
console.log(obj2);


//cloning
const obj3 = {...obj1};
obj1["hobby"] = "guitar";

console.log(obj1);
console.log(obj3);


//cloning using Object.assign
const obj4 = Object.assign({}, obj1);

obj1["sleepyhead"] = "yes";

console.log(obj1);
console.log(obj4);


// __________________________________________________
//optional chaining

const user = {
    Id : 5,
    Name : "Devanshu",
    // hobby : {instrument : "guitar"}
}

console.log(user.Id);
console.log(user.Name);
console.log(user.hobby);
// console.log(user.hobby.instrument) //to remove this error, if hobby does not exist now, but will emerge later
console.log(user?.hobby?.instrument) // '?' checks whether it exists, if not return undefined. So error does not occur and code runs


// __________________________________________________
// methods: functions inside object
// "this" keyword : "this" is caller object, calling out the function

const person1 = {
    fName : "Devanshu",
    age : 22,
    about: function(){
        // console.log(`person name is ${fName} and age is ${age}`) // error
        console.log(`person name is ${this.fName} and age is ${this.age}`) // error
        console.log(this);
    }
}

person1.about();


// __________________________________________________
console.log(window);
console.log(this);
console.log(window===this);

function greet(){
    "use strict" // will return undefined from below line, if called without caller object
    console.log(this);
}

window.greet();


// __________________________________________________
