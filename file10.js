// 1. Array Important methods 
//    -> forEach 
//    -> map 
//    -> filter 
//    -> reduce 



// __________________________________________________
//forEach
const arr = [4, 5, 6, 7, 8, 9];

function fun1(value, index){
    console.log(`index is ${index} and value at ${index} is ${value}`);
}

arr.forEach(fun1);  //passes value and index to the function

const users = [
    {fName : "Devanshu", age : 22},
    {fName : "Jethalal", age : 50},
    {fName : "Goku", age : 30}
]

users.forEach((user) => {
    console.log(user.fName);
})


// __________________________________________________
// map : returns an array of "callback returned values"

const numbers = [3,4,6,1,8]

const square = (num)=>{
    return num*num;
}

console.log(numbers.map(square));


// __________________________________________________
// filter : iska callback function hamesha "true" waali values hi return karega

const numbers1 = [2,3,4,5,6,7];

function funFilter(num){
    return num%2===0;
}

console.log(numbers1.filter(funFilter));


// __________________________________________________
// reduce 

const numbers2 = [10,20,30,40,50,10,20,30];

//Initial step: accumulator = 0 & currentvalue = 10
//Second step: accumulator = 10(returned value) & currentvalue = 20
//Third step: accumulator = 30(returned value) & currentvalue = 30


const sum = numbers2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); //value of accumulator is 0 i.e. initial value

console.log(sum);