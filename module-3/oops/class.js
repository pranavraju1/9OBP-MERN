// ES6 

//arrow function 

// normal javascript function
// function add(a,b){
//     return a+b;
// }

// console.log(add(2,3));

// using arrow function-> arrow function is shorthand for  writing function 
// in javascript 

// const add=(a,b)=>{
//     return a+b;
// }

// console.log(add(2,3));

// let const 

// functionname = () => {

// }

// without parameter 

// const print=()=>{
//     console.log("Hello World!");
// }

// print();

// with parameter 

// const add=(a,b)=>{
//     console.log("sum a,b is",a+b);
// }

// add(2,3);


// with return keywords 

// const add = (a,b)=>{
//     return a+b;
// }

// console.log(add(1,2));


// const add = (a,b) => a+b;
// console.log(add(1,2));


// Classes 
// Class is used for creating blueprint of the object.


// function User(name,age){
//     this.name = name;
//     this.age =age;
// }

// let user1 = new User("Abhishek",20);
// console.log(user1);


// constructor function is special in the class that can be used for 
// intialization for property of the object 
// class User{

//     constructor(name,age){
//        this.name = name;
//        this.age = age;
//     }
    
// } 

// let user1 = new User("Abhishek",20);
// console.log(user1);


// Note :-
// a class can have only one constrcutor 

// class User{

//     constructor(name,age){
//        this.name = name;
//        this.age = age;
//     }

    

// }

// const user1 = User("Abhishek",20);
// console.log(user1);


// create a class Book with multiple properties and 
// and then create 3 books 

// class Book{
//     constructor(id,title,author){
//         this.id=id;
//         this.title=title;
//         this.author=author;
//     }
// }

// const book1 = new Book(1,"Physics","H.C verma");

// const book2 = new Book(2,"Math","R.D Sharma");

// console.log(book1==book2); // false

// console.log(book1.id); //1

// console.log(book2.id); //2

// console.log(book1.title); //Physics

// instance method -> depends upon the isntance of the class.
// class Book{
//     constructor(id,title,author){
//         this.id=id;
//         this.title=title;
//         this.author=author;
//     }

//     getBook(){
//         console.log(this.title);
//     }
// }


// let book1 = new Book(1,"Physics","H.c Verma");
// let book2 = new Book(1,"Math","R.D Sharma");
// book1.getBook();
// book2.getBook();

// this keyword in the class 


// mutlitple isntance method in a class 
// create class BankAccount and create withdrawal and deposit 
// create to bankAccount instance and then deposit and withdrawal 
// the money in the bank account and return the current balance 
// class Account{
//    balance;

//    constructor(intialBalance){
//      this.balance = intialBalance;
//    }

//    withdrawal(amount){
//     this.balance-=amount;
//    }

//    deposit(amount){
//     this.balance+=amount;
//    }
// }


// let account1 = new Account(5000);
// account1.withdrawal(2000);

// account1.deposit(500);

// console.log(account1.balance);

// let account2 = new Account(10000);
// account2.withdrawal(1000);
// account2.deposit(2000);
// console.log(account2.balance);

// account2.balance +=2000; //write
// console.log(account2.balance); //read

// getter and setter 

// class Student{
//     name;
//     age;
//     marks;

//     constructor(name,marks){
//        this.name = name;
//        this.marks = marks;
//     }

//     // getters 
//     getStudentName(){
//         return this.name;
//     }

//     getStudentMarks(){
//         return this.marks;
//     }

//     // setters 
//     setAge(age){
//       this.age=age;
//     }

//     //getter 
//     getAge(){
//         if(this.age==undefined)
//           return "age is not provided";
//         else 
//          return this.age;
//     }

//     // update marks 
//     updateMarks(newMarks){
//       this.marks = newMarks;
//     }
    

// }

// let student1 =new  Student("AKash",30);

// console.log(student1.getStudentMarks());
// console.log(student1.getStudentName());

// student1.setAge(20);
// console.log(student1.getAge());


// student1.updateMarks(50);
// console.log(student1.getStudentMarks());

// private fields - > private fields 
// are not accessible outside of the class 
// also not accessible subclass or child class

// class Account{
//    #balance;
   

//    constructor(intialBalance){
//      this.#balance = intialBalance;
//    }

//    withdrawal(amount){
//     this.#balance-=amount;
//    }

//    deposit(amount){
//     this.#balance+=amount;
//    }

// //    getter function
//    getBalance(){
//      return this.#balance;
//    }
// }


// let account1 = new Account(5000);
// account1.withdrawal(2000);

// account1.deposit(500);

// console.log(account1.getBalance());

// static method -> 
// static method belong to the class 
// static method does'nt depend on instance of the class.


// class Student{
//     constructor(name,marks){
//          this.name = name ;
//          this.marks = marks;
//     }

//     static totalMarks(marks1,marks2){ 
//         return marks1+marks2;
//     }

// }

// let student1 = new Student("Akash",80);
// let student2 = new Student("Vikash",70);

// console.log(Student.totalMarks(student1.marks,student2.marks));

// usecases -> 
// operation is based on the parameter rather than the instance value.

// Math 
// pow add max 

// class MathOperation{
//     static add(a,b){
//         return a+b;
//     }

//     static pow(a,b){
//        return a**b;
//     }

//     static max(a,b){
//       if(a>b)
//         return a;
//       else 
//        return b;
//     }
// }

// console.log(MathOperation.add(1,2));

// console.log(MathOperation.pow(2,3));

// Encapsulation:-
// grouping (related data)properties and methods related to that properties
// inside a unit is called encapuslation and that unit 
// is a class or object.


class Account{
   #balance;
   #AccountHolderName 
   #AccountNumber
   

   constructor(intialBalance){
     this.#balance = intialBalance;
   }

   withdrawal(amount){
    this.#balance-=amount;
   }

   deposit(amount){
    this.#balance+=amount;
   }

//    getter function
   getBalance(){
     return this.#balance;
   }
}

// Advantage of Encapsulation:-
// Data protection 
// Controlled access
// Easy to maintain(readibility)


// Inheritance 


// psuedo code 
// class vehicle{

//   engine(){
//     console.log("engine starts");
//   }
//   move(){
//     console.log("Move");
//   }
// }

// class Car extends vehicle{

//     color(){
//         console.log("car is green");
//     }
  
// }

// let car1 = new Car();

// car1.color();
// car1.engine();


// Method Overriding 
// class vehicle{

//   engine(){
//     console.log("petrol engine");
//   }
//   move(){
//     console.log("Move");
//   }
// }

// subclass
// class Car extends vehicle{
//     name

//     constructor(name){
//        super();
//        this.name=name;
//     }

//     engine(){
//         console.log("diesel engine");
//     }

//     color(){
//         console.log("car is green");
//     }  
// }

// let car1 = new Car("Audi");
// car1.engine();

// console.log(car1.name)


// Super keyword -> super keyword can be used to access parent constructor;

// super()-> used for accesing parent class constuctor 
// super().method() -> used for calling parent class function

class vehicle{
  #vehicleType

  constructor(vehicleType){
     this.#vehicleType=vehicleType
  }

  engine(){
    console.log("petrol engine");
  }
  move(){
    console.log("Move");
  }

  getVehicleType(){
    return this.#vehicleType;
  }
}

// subclass
class Car extends vehicle{
    name

    constructor(name){
       super("car"); 
       this.name=name; 
    }

    engine(){
        console.log("diesel engine");
    }

    color(){
        console.log("car is green");
    }  
}

let car1 = new Car("Audi");


console.log(car1.getVehicleType());

car1.engine();

console.log(car1.name)










