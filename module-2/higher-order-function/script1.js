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
// let a = "pending"
// function order(){
//      function delivery(){
//         let b= 10;
//         console.log("delivery ",a);
//      }
//      delivery();
// }

// order();



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


// predict the output
// function counter(){
//     let a = 0;
//   return function increment(){
//       a+=2;
//       console.log(a);
//   }
// }

// let count = counter(); 
// count();
// count();

// q2-

// function counter(){
//     let a = 0;
//   return function increment(){
//       a+=1;
//       console.log(a);
//   }
// }

// let count = counter(); 
// count();
// count();

// let count1 = counter();
// count1();
// count1();



// question 1
// let arr = [1,2,1,5];
// multiply each value of the array by 2 and store in a new array and print it.
// let double=[];
// for(let i=0;i<arr.length;i++){
//     double.push(arr[i]*2);
// }
// console.log(double);


//Map, filter and reduce (Higher order function)
// Map -> map transform each item of the array and returns a new array.

// function double(ele,index,arr){

// }

//  map(double);

// let arr = [1,2,1,5];

// function double(elem){
//     return elem*2;
// }

// let newArr = arr.map(double);
// console.log(newArr);
     
// predict the output 
// let arr = [1,2,1,5];

// function double(elem){
//      elem*2;
// }

// let newArr = arr.map(double);
// console.log(newArr);

// q2:- 
// given an array mulitple the item at even places by 2 
// and mulitple the item at odd places by 3 
// and then return a new array with operation applied on each item.


// let arr = [2,3,4,5];

// function operation(item,index){
//     if((index+1)%2==0){
//         return item*2;
//     }else{
//         return item*3;
//     }

// }

// let newArr= arr.map(operation);
// console.log(newArr);


//  
// let persons =[
//   {
//     name:"Abhishek",
//     age:20
//   },{
//     name:"Ravi",
//     age:17
//   },{
//     name:"Santosh",
//     age:19
//   },{
//     name:"Brijesh",
//     age:21
//   }
// ]

 
// return an array consisting name of the person who is eligible to vote. 
// Person who is greate than or equal to 18 is eligible.

// function eligible(person){
//     if(person.age>=18){
//         return person.name;
//     }
// }

// let res = persons.map(eligible)

// console.log(res);


// [ 'Abhishek', undefined, 'Santosh', 'Brijesh' ]



// 
// let persons =[
//   {
//     name:"Abhishek",
//     age:20,
//     address:{
//          city:"Pune",
//          state:"Maharashtra"
//     }
//   },{
//     name:"Ravi",
//     age:17,
//     address:{
//         city:"Lucknow",
//         state:"U.P"
//     }
//   },{
//     name:"Santosh",
//     age:19,
//     address:{
//         city:"Dehradun",
//         state:"U.K"
//     }
//   }
// ]


//  transform the given persons array in to following FormData

// let persons =[
//   {
//     name:"Abhishek",
//      city:"Pune"
//   },
//   {
//     name:"Ravi",
//     city:"Lucknow"
//   },
//   {
//     name:"Santosh",
//     city:"Dehradun"
    
//   }
// ]

// function transform(person){
//    return {name:person.name,city:person.address.city}
// }

// let newArr = persons.map(transform);
// console.log(newArr);


// filter -> filter is also higher order function.
// fitler takes a callback function and if callback function return true 
// then insert the item in to final Array 

// syntax 
// function callback(elem,index,arr){

// }

// let newArr = arr.filter(callback);


// let arr = [2,3,6,7,8];
// function even(elem){
//     if(elem%2==0)
//        return true;
//     else
//       return false;
// }

// let newArr = arr.filter(even);
// console.log(newArr);



// quesiton 

let persons =[
  {
    name:"Abhishek",
    age:20
  },{
    name:"Ravi",
    age:17
  },{
    name:"Santosh",
    age:19
  },{
    name:"Brijesh",
    age:21
  }
]

// return an array consisting name of the person who is eligible to vote. 
// Person who is greate than or equal to 18 is eligible.

function eligible(person){
    if(person.age>=18)
      return true;
    else 
      return false;
}

let newArr = persons.filter(eligible);
console.log(newArr);











