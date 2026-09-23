// Javascript is synchornous and single threaded langauge 

// Synchornous -> one statement excuted at a time 

// next statement is excuted once the previous 
// statement finished it's excution.

// console.log("start");

// console.log("line 1")

// console.log("line 1")

// console.log("end");


// web api's
// storage -> localStorage/session storage
// Timer -> setTimeOut / SetInterval 
// Location 
// Dom 
// Fetch 


// SetTimeOut() -> Excute the callback function approximately after 
// specified time.

// setTimeout(callback,timer):-

// console.log("Start");

// timerId = setTimeout(()=>{
//   console.log("code excuted after 200ms");
// },200)


// console.log("end");

// // timerId
// clearTimeout(timerId);



// Asynchronous programming:- Asynchronous programming allows to deffer 
// excution of a code and start excuting the following code and once  
// deffered task is done it can be handled.


// Role of callback in Asynchronous Programming 



// synchornous task  
// console.log("start")

// for(let i=0;i<1000000000;i++){

// }

// console.log("end");


// Asynchronous 

// console.log("start")

// // api call 
// fetch();

// console.log("end");




// Ways to handle Asynchronous Operation:-
// callback 
// Promise
// Async Await

// SetInterval(callback,time)-> 
// setInterval keep excuting callback function after specified interval.


// let count =0;
// id = setInterval(()=>{
//     console.log("This is js");
//     count++;
//     if(count==10)
//       clearInterval(id);
// },200)


// print 1 to 5. one number every second.

// let count = 1;
// let id = setInterval(() => {
//     console.log(count);
//     count++;
//     if (count == 6) {
//         clearInterval(id);
//     }
// }, 1000)



// callback function -> function that is passed as an argumne to another function
// callback function.

// function delivery(){
//    console.log("item is disptached for delivery.");
// }


// function placeOrder(callback){
//     callback();
// }


// placeOrder(delivery);


// nested callback -> callback function inside callback function 


// function login(cred,callback){
//     //api call
      
//    const  {error,user} = fetch(cred);

//    callback(error,user);
// }




// login(crend,(error,user)=>{
//     if(error)
//       return;
//      getProfile(user.id);
//  });


//  arrow function and anonymous
















