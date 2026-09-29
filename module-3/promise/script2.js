//operation that take time that do no not finish immediately 

// fetch data from an api 
// Reading file 
// waiting for the time 


// function getUser(){
//     setTimeout(()=>{
//         return "Chetan";
//     },2000)
// }

// console.log(getUser());

// user will not be returned immediately. it will take time .
// it means we need mechanism where can store future value.


// Promise is a placeholder for future value.


// The Promise object represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value.


// For handling Asynchronous operation

// function getUser(){
//     return new Promise((resolve,reject)=>{
//         // when asynchronous task excuted successfully 
//         setTimeout(()=>{
//             reject("Name is not found");
//         },2000);
//        })
// }

// getUser().
// then((data)=>{
//      console.log(data);
// })
// .catch((error)=>{
//     console.log("error",error);
// })


// excutor function-> promise take an excutor function 


// Promise State:-
// pending 
// fullfill 
//  Rejected

// Promise is called settled when it is no longer pending.



// const promise = new Promise((resolve,reject)=>{
//     resolve("sucess");
//     reject("Error");
// })


// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


// multiple settime out inside a promise
// function getUser() {
//     let promise1 = new Promise((resolve, reject) => {
//         // when asynchronous task excuted successfully 
//         setTimeout(() => {
//             resolve("Chetan");
//         }, 2000);
//     })

//     let promise2 = new Promise((resolve, reject) => {
//         // when asynchronous task excuted successfully 
//         setTimeout(() => {
//             resolve("Nilay");
//         }, 5000);
//     })

//     return [promise1, promise2];
// }

// let promises = getUser();

// console.log(promises[0]);
// console.log(promises[1]);

// promises[0].
//     then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     })

// promises[1].
//     then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     })



// finally-> finally run after the prmise is settled.

// function getUser(){
//     return new Promise((resolve,reject)=>{
//         // when asynchronous task excuted successfully 
//         setTimeout(()=>{
//             resolve("Name is not found");
//         },2000);
//        })
// }

// getUser().
// then((data)=>{
//      console.log(data);
// })
// .catch((error)=>{
//     console.log("error",error);
// }).finally(()=>{
//     console.log("finally");
// })

// cleanup 


// what will be printed 

// let promise = new Promise((resolve, reject) => {
//     reject("Failed");
// })

// promise.then((data) => {
//     console.log(data);
// }).finally(() => {
//     console.log("promise is settled");
// }).catch((error) => {
//     console.log(error);
// })

// promise chaining -> In promise chaining multiple .then is connected one after 
// another and result of one asynchronous operaiton is passed to another.



// decode
// Promise.resolve("check").
//     then((value) => {
//         console.log(value); //10
//         return 2*value;
//     }).then((value)=>{
//         console.log(value);
//         return 2*value;
//     }).then((value)=>{
//        console.log(value);
//     })

//if have to handle multiple dependent asynchronous opertion 
// Callback Hell

// login(cred,(error,user)=>{
//     if(error)
//       return;
//     getProfile(user.id,(error,profile)=>{
//         if(error)
//           return;
//           getCourse(user.id,(error,course)=>{
//                 if(error)
//                   return;
//                 getAssignment()
//           })
//     })
// })

// Psuedo code 

//promise chaining 
// login(cred)
//  .then((user)=>{
//      getProfile(user.id); //function return a promise
// }).then((profile)=>{
//      getCourse(profile.user.id)  //function return a promise
// }).then((course)=>{
//     getAssignment(course.id);
// }).then((assignment)=>{
//     console.log(assignment);
// }).catch((error)=>{
//     console.log(error);
// })

// Advatage of promise chaining over callback Hell:-
// better error handling 
// easier to maintain 
// easier to read 


//Q1:-
// returns studentid
// function getStudent(){
//     return Promise.resolve(1);
// }

// function getCourse(studentId){
//     return Promise.resolve({id:studentId,course:"enrolled in mern"});
// }

//call getStudent and get the studentid 
//pass the studentid to getCourse 


// use promise chaining

// getStudent().then((studentId)=>{
//     console.log(studentId);
//     return getCourse(studentId);
// }).then((course)=>{
//    console.log(course);
// }).catch((error)=>{
//     console.log(error);
// })



// Question 2

// promisify-> process of converting callback based function in to promise.

// function loginUser(username, password, callback) {
//     setTimeout(() => {
//         if (username === "admin" && password === "1234") {
//             callback(null, { userId: 101 });
//         } else {
//             callback("Invalid credentials", null);
//         }
//     }, 1000);
// }


// promise based function 

function loginUser(userName, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                resolve({ userId: 101 });
            } else {
                reject("Invalid credentials");
            }
        },10000)
    })
}


function getUserProfile(userId, callback) {
    setTimeout(() => {
        callback(null, {
            name: "Rahul",
            email: "rahul@example.com"
        });
    }, 1000);
}

function getUserCourses(userId, callback) {
    setTimeout(() => {
        callback(null, ["JavaScript", "React", "Node.js"]);
    }, 1000);
}



// Task

// Convert these callback-based functions into Promise-based functions and then use Promise Chaining to perform the following operations:

// Login User
//      ↓
// Get User Profile
//      ↓
// Get User Courses
//      ↓
// Display all information