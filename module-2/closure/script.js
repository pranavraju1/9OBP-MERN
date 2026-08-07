//Callback function-
//function that is passed as an argument to another function is known as 

// Higher Order function- function that take another as an argument or 
// return a function is known as higher order function.

// Example 1:-
// function email(){
//     console.log("email delivered succesfuly");
// }

// function delivery(email){
//     email();
// }


// delivery(email);

// delivery -> higher order function 
// email -> callback function 


// Example 2:-
// function delivery(){
//     return function verify(){
//         consoe.log('verified succesfuly');
//     }
// }

// delivery();

// Higher Order -> delivery


//Predict the output
// question 1:-
// function order(){
//     function deliver(){
//         console.log("Item is delivered");
//         return 2;
//     }
//     return deliver();
// }

// console.log(order())

// undefined 2 


// item is delivered 
//2


//question 2
// function order(){
//     return function deliver(){
//         console.log("Hello");
//     }
// }

// console.log(typeof order()) // function
// let dl = order();
// console.log(dl); // [Function: deliver]


// question 3
// function delivery(){
//     console.log("Order delivered succesfuly");
// } 

// function order(delivery){
//     console.log("delivering")
//     delivery;
// }

// order(delivery)

//o/p-> delivering


//question 5
// In a company there are 3 types of employees developers,tester and manager. 
// tester got 5% increment and developers 10% and manager 15%.
// create three function 
// developerIncrement and testerIncrement and ManagerIncrement
// and create a function totalSalary that will take the function based 
// on employee and 
// base salary and will return total Salary.

// function developerIncrement(baseSalary){
//     return baseSalary*0.05;  
// }

// function testerIncrement(baseSalary){
//    return baseSalary*0.1;
// }

// function managerIncrement(baseSalary){
//     return baseSalary*0.15;

// }

// function totalSalary(callback,baseSalary){
//     let totalSalary=baseSalary+callback(baseSalary);
//     return totalSalary;
// }

// console.log(totalSalary(developerIncrement,1000)); 

// console.log(totalSalary(testerIncrement,200));

// console.log(totalSalary(managerIncrement,800));


// closure




// Scope 
//   let a = "pending"
// function order(){
  
//      function delivery(){
//         console.log("delivery ",a);
//      }
//      delivery();
// }

// order();

// process of searching value from it's scope to 
// it's parents scope and the parent of parent untill global scope
// this process is known scope chain.


// Lexical Environment  -> 
// lexical env is an object that have variable and function
// it's scope and reference it's parent scope.
let a = "pending"
function order(){
     function delivery(){
        let b= 10;
        console.log("delivery ",a);
     }
     delivery();
}

order();



// Lexical Environment  -> 
// lexical env is an object that have variable and function
// it's scope and reference it's parent scope.
// let a = "pending"
// function order(){
//      function delivery(){
//          let b=0;
//         console.log("delivery ",a);
//      }
//      delivery();
// }

// order();


// closure -> closure is function that is bundled together with 
//it's lexical env.

// - Inner function has access of variable 
// of outer function even after inner function
// is returned from the outer function

// function counter(){
//     let a = 0;
//   return function increment(){
//       a++;
//       console.log(a);
//   }
// }

// let count = counter();
// count();
// count();
// count();

// predict the output
// function counter(){
//     let a = 0;
//   return function increment(){
//       a++;
//       console.log(a);
//   }
// }

// let count = counter();
// count();
// count();

//Map, filter and reduce (Higher order function)

// Map -> 




















