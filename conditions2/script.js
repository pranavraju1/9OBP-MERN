// marks are 60 and above -> "C Grade" 
// marks are 75 and above -> "B Grade" 
// marks are 90 and above -> "A Grade" 
// below 60 -> "Fail"
// marks will be from 0 to 100
// let marks = 82;


// Logical operators
// && ||

// console.log(true && true)   //true
// console.log(false && true)   //false
// console.log(true && false)   //false
// console.log(false && false)   //false

// console.log(true || true)  //true
// console.log(false || true)  //true
// console.log(true || false)  //true
// console.log(false || false)  //false



// check if he/she is a teenager
// age is in between 13 and 18

// let age = 5;

// if(age > 13 && age <18){
//     console.log("teenager")
// }


// if(age > 13){
//     if(age < 18){
//         console.log("teenager")
//     }
// }



// if the username is 'pranav' and the password is '123pw' 
// only then can the user access the data

// let username = "pranv";
// let password = "123pw";

// if(username === "pranav" && password === "123pw"){
//     console.log("user can access data")
// }

// username can 'pranav' or can be 'admin'

// if( (username === "pranav" || username === 'admin') && password === "123pw"){
//     console.log("user can access data")
// }



// let email = "";
// let phone = 0;

// user can only submit detials if user has filled his deatils
// if he has given both email and phone print "form submited"

// if(email && phone){
//     console.log("form submited")
// }else{
//     console.log("fill user details")
// }


// Q3. 
// age must be in between 21 and 60
// isIndian should be true
// if both the above conditions and satisfied print "eligible for credit card"
// else print "not eligible"

// let age = 30;
// let isIndia = false;

// if(isIndia && age>21 && age <60){
//     console.log("eligible")    
// }else{
//     console.log("Not eligible")
// }



// let result =  isIndia && age>21 && age <60 //false




// && short circuiting
// let result = 100 && "asd" && 100 && "qweq";
// console.log(result)
// && operator searches for the first falsy value
// if all values are true it will return me the last value



// Or shortcircuiting
// let result = 0 || "" || 0 || null;
// console.log(result)
// || operator searches for the first truthy value
// if all values are false it will return me the last value




// // let result = null || 2 || undefined;
// let result = 1 && null && 2;
// console.log(result)



// let result = 0 || null && 3;

// console.log(result)

// Note: the && operator has more precedence than || operator


// let result = null || 2 && 3 || 4;
// let result = null || 3 || 4;
// console.log(result)


// let firstName = "";
// let lastName = "";
// let nickName = "";
// // if all of the above values does not exit print 'Anonymous'

// let result = firstName || lastName || nickName || 'Anonymous';
// console.log(result);



// console.log(0 || "" || null || undefined || "hello" || 42); 

// console.log("foo" && 10 && [] && 0 && "bar"); 

// Line 4 
// let a = 0, b = 1, c = 2; 
// console.log(a || b && c); 

// NOT operator
// console.log(!true) //false
// console.log(!false)  //true

// console.log(!0) //true
// console.log(!10) //false

// console.log(!!true) //

// Line 3 
// console.log(!!"false"); //true

