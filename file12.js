// 1. call, apply, bind 



// __________________________________________________
// call
//  - parentObject.callingFunction.call(childObject) 
// - child object determines the 'this' of parent object
const user1 = {
    fName : "Devanshu", 
    age : 22,
    about : function(){
        console.log(this.fName, this.age);
    }
}

const user2 = {
    fName : "Devu", 
    age : 23,
}

user1.about();
user1.about.call(user2);  //user2 borrows from user1