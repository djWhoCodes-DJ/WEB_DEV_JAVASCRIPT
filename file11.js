// 1. Iterables vs Array like objects 
// 2. set 
//     - has method
//     - for of loop
// 3. Maps



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