// class 
// blue of the object 


//constructor() -> when instance of the class is created construcotr 
// is called first.


// default constructor 


// class Student{


    // default constructor 
    
    // constructor(){

    // }
// }


// 


// instance method vs static method 

// instance method -> belongs to the instance
// class Student{

//   constructor(name){
//     this.name = name;
//   }

//   getStudentName(){
//     return this.name;
//   } 
// }


// let student1 = new Student("Abhishek");

// console.log(student1.getStudentName());

// let student2 = new Student("Abhi");
// console.log(student2.getStudentName());


// static Method-> static method belongs to class 

// class MathUtil{
//     static add(a,b){
//         return a+b;
//     }
// }


// console.log(MathUtil.add(1,2));

//private field

// class Account{
//    #balance;

//    constructor(openingBalance){
//     this.#balance = openingBalance;
//    }

//   // settter function
//    deposit(amount){
//       this.#balance+=amount;
//    }

//    #withdrawalHelper(){ 

//     // right person
//     // singtaure mathc 
//     // 4-5 things    
//    }

//    //getter
//    getBalance(){
//     return this.#balance;
//    }

//    withdrawal(){
//     return withdrawalHelper();
//    }


// }


// let account1 = new Account(1000);

// console.log(account1.getBalance());

// method can be also private 



// OOPS Pillars- 4 pillars 
// Encapsulation
// Inheritance
// Polymorphism
// Abstraction 


// oops design patern -> 
// composition 

//encapsulation:- encapsulation is wrap mutiple methods and properties.
// wrapping properties(related data) and methods related to that proeprties  in a single unit called 
// encapsulation.

// Single Unit -> class or objects


// class Account{
//    #balance;

//    constructor(openingBalance){
//     this.#balance = openingBalance;
//    }

//   // settter function
//    deposit(amount){
//       this.#balance+=amount;
//    }

//    #withdrawalHelper(){ 

//     // right person
//     // singtaure mathc 
//     // 4-5 things    
//    }

//    //getter
//    getBalance(){
//     return this.#balance;
//    }

//    withdrawal(){
//     return withdrawalHelper();
//    }
// }

// controlled access 
// data protection 
// easy to maintain 


// inheritance - child class inherit the properties 
// and method of parent class.

// is-a relationship 


// class Vehicle{

//     no_of_wheels = 4;

//     engine(){
//         console.log("Engine Starts")
//     }

//     injectFuel(){
//         console.log("inject the fuel")
//     }

//     start(){
//         this.injectFuel();
//         this.engine();
//     }
// }


// // derived class
// class Car extends Vehicle{
//     name
//     model
//     price

//     constructor(name,model,price){
//       super();
//       this.name = name;
//       this.model = model;
//       this.price = price;
//     }

//     color(){
//         console.log("Car color is blue");
//     }

//     drive(){
//         super.start();
//     }
// }

// let car1 = new Car("Baleno","alpha",3000); 
// // car1.engine();

// // console.log(car1.no_of_wheels)

// car1.drive();

// super() -> calls parent constructor 
// super.method() -> calls parent method 
// from the child

 
// mutlilevel inheritance 
// class employee 


// developer 
// //write code 

// senior developer
// Code review 
// writing code 


// mutliple inheritance ->invalid 
// a class can'nt inerhit to multiple class.


// Polymorphism->
// Poly- many 
// morphism-> form

// same method response in different way to 
// different object. it's means same method is 
// taking different form.

// class Animal{
//    sound(){
//     console.log("Animal Sound");
//    }
// }


// class Horse extends Animal{
//      sound(){
//         console.log("Horse Sound")
//      }
// }

// class Dog extends Animal{
//     sound(){
//         console.log("Dog sound");
//     }
// }

// let dog = new  Dog();

// dog.sound();

// let horse = new Horse();
// horse.sound();



// let animals = [
//     new Dog(),
//     new Horse()
// ];

// animals.forEach((animal)=>{
//    animal.sound();
// })


// method overriding 



// class Animal{
//    sound(){
//     console.log("Animal Sound");
//    }
// }


// class Horse extends Animal{
//      sound(){
//         console.log("Horse Sound")
//      }
// }

// class Dog extends Animal{
//     sound(){
//         console.log("Dog sound");
//     }
// }


// Abstraction -> unnecessary details hiden
// expose only important details 

// abstract class and interface -> not present 


// private fields to implement abstraction

// class Vehicle{
//     enginetype
//     no_of_wheels = 4;

//     #engine(){
//         console.log("Engine Starts",this.entineType)
//     }

//     #injectFuel(){
//         console.log("inject the fuel")
//     }

//     start(){
//         this.#injectFuel();
//         this.#engine();
//     }
// }


// let car =new  Vehicle();

// car.start();



// design a class employee,
// developer and senior developer 

// employee ->
// salary()
// name 
// empid
// role 

// devleoper 
// lanauges
// proejctassigned 


// seniordevloper 
// code review 


// follow oops design principle and expalin 
// how oops desingn pricipals is incorporated 
// in your code 






































