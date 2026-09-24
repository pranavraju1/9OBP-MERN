

// synchronous and Asynchronous 



// setTimeout() -> excute a piece of code after specified time interval.
// set time out returns a timerId 
// clearTimeout(timerId)->

// setInterval() -> keep excutating a piece of code after specified time interval.
// clearInterval(id);


// callback functionn-> function that is passed to another function as an argument.


// function order(delivery){
//     delivery();
// }


// function delivery(){
//     console.log("item is dispatched for the delivery");
// }

// order(delivery);


// approach 

// function order(delivery){
//     delivery();
// }

// order(function delivery(){
//     console.log("item is dispatched for the delivery");
// });


// anonuymous function -> function that does'nt have any name.

// let a=function(){
//     console.log("this is anonymous fucntion")
// }

// a();


// function order(delivery){
//     delivery();
// }

// order(function(){
//     console.log("item is dispatched for the delivery");
// });


// callback

// function order(delivery){
//     delivery();
// }

// order(()=>{
//     console.log("item is dispatched for the delivery");
// });


// nested callback 
// - multiple dependent asynchronous task
//     - to handle mutliple handle asynchorous task
//         - need nested callback

// // pseudo code 
// function login(cred, callback) {
//     callback(error, user);
// }


// login(cred, (error, user) => {
//     if (error)
//         return;
//     // console.log("user is logdin successfully")   

//     getProfile(user.id, (error, profile) => {
//         if (error)
//             return;

//         getCourse(user.id, (error, course) => {


//             getAssignment(course.id, (error, assignment) => {


//             })

//         })
//     })
// })

// strucutre -> 
// pyramid 

// pyramid of doom

// cons of nested of callback 
// - unreadable 
// - unmaintaible 



// one way to fix nesting is to use named function 
// handleCourse(){

// }

// function handleProfile(error, profile) {
//     if (error)
//         return;
//     getCourse(user.id, hanldeCourse)
// }

// function handleLogin(error, user) {
//     if (error)
//         return error;
//     getProfile(userId, handleProfile);
// }

// login(cred, handleLogin);


// not deeply nested 
// jumping from one function to another 
// tracing function can be harder 
// still hard to maintain 


// error first callback 
// function handleLogin(error, user) {
//     if (error)
//         return error;
// }

// login(cred, handleLogin);

// disadvantage :-
// hard to maintain
// pyramid of doom
// bad readibility 
// inversion of control 

// promise -


// use of prommise ->
// solve the disadvantage of callback.
// promised used to handle asynchronous operation.


// asynchornous operation are
// api call 
// file reading 
// database data fetch


// resolve() -> called when asynchronous resolved.
// reject() -> called when asynchronous operation rejected.

// 1. promise is created using promise constructor 

// const promise = new Promise((resolve, reject) => {
//     //    resolve("Asynchornous task is resolved");
//     reject("Promise rejected successfully");
// })

// promise consume 

// promise.then((result)=>{
//     console.log(result);
// })


// // promise catch 
// promise.catch((error)=>{
//    console.log(error);
// })

// State of the promise-> 
// Pending 
// Fullfilled 
// Rejected 



// Pending -> when a promise is created it's state is pending.

const promise = new Promise((resolve, reject) => {
    // //    resolve("Asynchornous task is resolved");
    // reject("Promise rejected successfully");
})

console.log(promise);



// const promise = new Promise((resolve, reject) => {
        //     // resolve("Asynchornous task is resolved");
        //     reject("Promise rejected successfully");
        // })

        // console.log(promise);

        // fullfilled -> 
        // when asyncronous task complete succesfully then resolve() called.

        // promise.then((result)=>{
        //      console.log(result);
        // })

        // lifecycle of promise 
        // pending -> resolved -> fullfilled 


        // rejected 
        // promise.then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        // pending -> recject-> rejected 



        // create a function isEven that will return a promise if the no is even 
        // promise will after 2second with message that no is even and if no is odd promise will
        // reject with message no is odd after 2 seconds



        // function isEven(n) {
        //     return checkPromise = new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             if (n % 2 == 0) {
        //                 resolve("no is even");  //when operation is successfull
        //             } else {
        //                 reject("no is odd"); // when operation is not succesfull
        //             }
        //         }, 2000)
        //     })
        // }

        // isEven(6).then((result) => {
        //     // when promise is resolved 
        //     console.log(result);
        // }).catch((error) => {
        //     // when promise is rejected 
        //     console.log(error);
        // })


        // create function isEligible that will take student age and return a promise  if student is greater than 18 year old 
        // resolve the promise with message that eligible other wise 
        // reject with message not eligible after 2 seconds



        function isEligible(age) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age > 18) {
                        resolve("Eligible");
                    }
                    else {
                        reject("Not Eligible")
                    }

                },2000)

            })
        }


        isEligible(17).then((result)=>{
              console.log(result);
        }).catch((err)=>{
             console.log(err);
        });






