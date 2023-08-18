// 1. objects
// 2. How to iterate objects 
// 3. spread operator in object 
// 4. Object destructuring 
// 5. objects inside array 


// ____________________________________________________
// objects 
// - arrays are good but not sufficient for real world data
// - objects store key value pairs 
// - objects don't have index 
// - objects are reference type 

//create an object
const person = {
    name : "Devanshu",
    age : 22,
    hobbies : ["gym", "guitar", "tennis"]
}
console.log(person, typeof person)

//access from object
console.log(person.name);
console.log(person.age);
console.log(person.hobbies)

//adding key value pairs to objects
person.gender = "male";
console.log(person);

// ________________________________

//bracket notation
const person1 = {
    Name : "Devanshu",
    age : 22,
    hobbies : ["gym", "guitar", "tennis"]
}

// console.log(person1[Name]); // error : Name is not defined
console.log(person1["Name"]);
console.log(person1["age"]);
console.log(person1["hobbies"])

// _________________________________

const person2 = {
    "Name" : "Devanshu",
    "age" : 22,
    "hobbies" : ["gym", "guitar", "tennis"]
}

console.log(person2["Name"]);
console.log(person2["age"]);
console.log(person2["hobbies"])

person2["singer"] = "no";
console.log(person2);

// _______________________________
// adding keys after taking from source
const key = "email";
const person3 = {
    Name : "Devanshu",
    age : 22,
    hobbies : ["gym", "guitar", "tennis"]
}

person3[key] = "jaindevanshu236@gmail.com";
console.log(person3)


// ____________________________________________________
// Iteration in Objects
const p1 = {
    Name : "Devanshu",
    age : 22,
    hobbies : ["gym", "guitar", "tennis"]
}

for(let key in p1){
    console.log(key, p1[key]);
}

for(let key in p1){
    console.log(`${key} : ${p1[key]}`);
}

// _________________________________
// Object.keys()
console.log(Object.keys(p1));
console.log(Array.isArray(Object.keys(p1)));

for(let key of Object.keys(p1)){
    console.log(p1[key]);
}


// ________________________________________________________
// spread operator: can be used to spread any iterable
const array1 = [1,2,3];
const array2 = [4,5,6];

const newArray = [...array1, ...array2];
console.log(newArray);
const newArray1 = [...array1, array2];
console.log(newArray1);

const tempArr1 = ["abcde"];
console.log(tempArr1);
const tempArr2 = [..."abcde"];
console.log(tempArr2);

// ___________________________________
// spread operator in objects 
const obj = {
    key1 : "value1",
    key2 : "value2",
    key1 : "value60" //overwrites 
}

console.log(obj);

const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

const obj2 = {
    key3 : "value3",
    key4 : "value4",
    key1 : "newKey1" //overwrites concatenated
}

const concatObj = {...obj1, ...obj2};
console.log(concatObj);

const newObject = {..."abcdefg"};
console.log(newObject);


// __________________________________________________
// Object destructuring
const band = {
    bandName : "Led Zeppelin",
    song : "stairway to heaven",
    year : 1968,
    anotherSong : "Kashmir" 
}

const {bandName, song, year, anotherSong} = band;
console.log(bandName);
console.log(song);

const {bandName: var1, song: var2, year: var3, anotherSong: var4} = band;
console.log(bandName); // error: bandName is not defined
console.log(var1);
console.log(var2);

const {bandName: v1, song:v2, ...v3} = band;
console.log(v1);
console.log(v2);
console.log(v3);


// __________________________________________________
// objects inside array
const users = [
    {userId : 1, firstName : "Jethalal", gender : "male"},
    {userId : 2, firstName : "Taarak", gender : "male"},
    {userId : 3, firstName : "Anjali", gender : "female"}
]

for(let user of users){
    console.log(user);
}

for(let user of users){
    console.log(user.firstName);
}

//nested destructuring
const [{firstName}, {userId}, {gender}] = users;
console.log(firstName);
console.log(userId);
console.log(gender);