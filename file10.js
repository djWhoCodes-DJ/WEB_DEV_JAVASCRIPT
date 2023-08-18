// 1. Array Important methods 
//    -> forEach 
//    -> map 
//    -> filter 
//    -> reduce 
//    -> sort
//    -> find
//    -> every
//    -> some
//    -> fill
//    -> splice



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


// __________________________________________________
//sort() : It sorts on the basis of ascii value of the character in the string
//         - changes the original array

const toSort1 = [2,17,4,48,3,0];
const testSorted = toSort1.slice(0).sort(); 
console.log(toSort1);
console.log(testSorted);


//real sorting
const lowToHigh = toSort1.slice(0).sort((a,b)=>{return a-b}); //increasing order
console.log(lowToHigh);

const highToLow = toSort1.slice(0).sort((a,b)=>{return b-a}); //increasing order
console.log(highToLow);


// __________________________________________________
// find
const animals = ["hello", "cat", "dog", "goat"];
function isLength3(str){
    return str.length===3;
}

console.log(animals.find(isLength3));


const employees = [
    {userId : 1, Name : "Goku"},
    {userId : 2, Name : "Vegeta"},
    {userId : 3, Name : "Trunks"},
    {userId : 4, Name : "Gohan"},
]

console.log(employees.find((emp)=>{return emp.userId===2}));


// __________________________________________________
// every : returns true if all true or false if atleast one false
const nums = [2,4,6,8];
console.log(
    nums.every((num)=>{
        return num%2===0;
    })
) // returns false : since 5 is odd and not all the elements are even

const nums1 = [2,4,5,8];
console.log(
    nums1.every((num)=>{
        return num%2===0;
    })
) // returns false : since 5 is odd and not all the elements are even


// __________________________________________________
// some : returns true if atleast one true or false if none true
const num3 = [1,3,6,9];
console.log(
    num3.some((num)=>{
        return num%2===0;
    })
) // returns false : since 5 is odd and not all the elements are even

const nums4 = [3,1,5,9];
console.log(
    nums4.some((num)=>{
        return num%2===0;
    })
) // returns false : since 5 is odd and not all the elements are even


// __________________________________________________
// fill method 
// value, start, end
const myArr = new Array(10).fill(5);
console.log(myArr);

const myArr1 = [2,3,4,5,6,7,8,9];
myArr1.fill(100, 3, 6); //end index is excluded
console.log(myArr1); //makes changes in original


// __________________________________________________
// splice method: startIndex, deleteNumberOfItems, insert

const myArr2 = ["item1", "item2", "item3", "item4", "item5"];
// const tempMyArr = myArr2.slice(0).splice(1, 2); //deleted elems
const tempMyArr = myArr2.slice(0); 
tempMyArr.splice(1, 2);
console.log(tempMyArr);
console.log(myArr2);

const tempMyArr2 = myArr2.slice(0); 
tempMyArr2.splice(1, 0, "Inserted elem", "Apple");
console.log(tempMyArr2)