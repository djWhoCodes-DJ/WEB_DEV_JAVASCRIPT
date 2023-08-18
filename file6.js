// 1. while loop 
// 2. for loop 
// 3. break keyword 
// 4. continue keyword
// 5. do while loop


// ____________________________________________________
let i = 0;
let ans = 0;
while(i<100){
    i++;
    ans += i;
}

console.log(ans);


// ____________________________________________________
for(let j=0; j<=9; j++){
    console.log(j);
}

// console.log(j);  //Error - Uncaught ReferenceError: j is not defined


// ____________________________________________________
// break
for(let k=0; k<5; k++){
    if(k===3){
        break;
    }
    console.log(k);
}


// ____________________________________________________
// continue
for(let k=0; k<5; k++){
    if(k===3){
        continue;
    }
    console.log(k);
}


// ____________________________________________________
// do-while
let z = 10; 
do{
    console.log(z);
    z++;
}while(z<5);