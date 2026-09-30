function loginUser(userName, password) {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        if (userName === "admin" && password === "1234") {
            resolve({ userId: 101 });
        } else {
            reject("Invalid credentials");
        }
        // }, 5000)
    })
}


// function getUserProfile(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId == 101) {
//                 resolve({
//                     name: "Rahul",
//                     email: "rahul@example.com"
//                 })
//             }else{
//                 reject("userid not provided")
//             }

//         }, 1000);
//     })
// }


//approach 1-> promise chaining 
// loginUser("admin", "1234")
//     .then((user) => {
//         return getUserProfile(user.userId)
//     })
//     .then((profile) => {
//         console.log(profile);
//     }).catch((error)=>{
//         console.log(error);
//     })

// approach 2 -> async await 

// async function handleProfile(){
//     let result= await loginUser("admin","1234");
//     let profile= await getUserProfile(result.userId);
//     console.log(profile);
// }

// handleProfile();


// Async await -> async await is cleaner and more redabale 
// way of hanlding asyncronous task.

// Async Keyword -> async function always return a promise.

// async function sum(a,b){
//     return a+b;
// }

// console.log(sum(1,2));


// await -> await stop the excution of the function further until promise settle.


// async function handleLogin(){
//    let user= await loginUser("admin","1234");
//    console.log("Hello");
// }

// handleLogin();


// predict the output

// async function handleLogin(){
//    let user= await loginUser("admin","1234");
//    console.log("Hello");
//    console.log("hello2");
// }


// handleLogin();
// console.log("Hello2");


// predict output 2

// async function handleLogin(){
//    let user= await loginUser("admin","1234");
// //    console.log("Hello");
// }


// handleLogin();
// console.log("Hello2");



function loginUser(userName, password) {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        if (userName === "admin" && password === "1234") {
            resolve({ userId: 101 });
        } else {
            reject("Invalid credentials");
        }
        // }, 5000)
    })
}


function getUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId == 101) {
                resolve({
                    name: "Rahul",
                    email: "rahul@example.com"
                })
            } else {
                reject("userid not provided")
            }

        }, 1000);
    })
}

// using async and await first call loginUser and then getUserProfile 
// and then print the profile details 

// try and catch block is used with async and await to handle error 
// async function handleLogin() {
//     try {
//         let user = await loginUser("admin", "1234");
//         let profile = await getUserProfile(user.userId);
//         console.log(profile);
//     }catch(error){
//         console.log(error);
//     }finally{
//         console.log("Hello");
//     }
// }


// handleLogin();


// sequential await -> to handle mutlitple dependent asyncronous operation.

async function handleLogin() {
    try {
        let user = await loginUser("admin", "1234");
        let profile = await getUserProfile(user.userId);
        console.log(profile);
    }catch(error){
        console.log(error);
    }finally{
        console.log("Hello");
    }
}


handleLogin();




// Create two function one is getUser another is getProduct both is 
//  independent and getUser return a promise that settle after 2 seconds
// and return userDetails and also call getProdcut that returns a promise that 
// settle after 1 sec and return products.

// print  product and user 

// handle these function using async and await 

// return a promise that resolve after 2s 
function getUser(){
    
}

// return a promise that settle after 3s 
function getProduct(){

}











// Promise methods 
promise.all 
promise.race 
promise.settleAll
promise.any



// 

