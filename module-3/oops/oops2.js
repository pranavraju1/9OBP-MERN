// employee class -> empname,empid,salary


// developer class -> write code 

// senior developer -> review code 

// make empsalary a private property

// class Employee{
//     empid;
//     empname;
//     #salary;
//     constructor(empid,empname,salary){
//        this.empid=empid;
//        this.empname=empname;
//        this.#salary=salary;
//     }

  
//     getSalary(){
//         return this.#salary;
//     }

//     #increment(){
//         //custom logic 
//         return 1000;
//     }

//     udpateSalary(){
//         this.#salary=this.#salary+this.#increment();
//     }
// }

// // add a new proprty programming lanaguge that is an array consiting all the programming 
// // lanaguage developer knows 
// class Developer extends Employee{
//     programmingLang;

//     constructor(empid,empname,salary,programmingLang){
//         super(empid,empname,salary,programmingLang);
//         this.programmingLang=programmingLang;
//     }

//     writeCode(){
//         console.log(this.empname,"is writing code"); 
//     }

// }


// class SeniorDeveloper extends Developer{
//     constructor(empid,empname,salary){
//         super(empid,empname,salary);
//     }
//     writeCode(){
//         console.log(this.empname,"is reviewing and writing code."); 
//     }
// }

// // name,id,salary
// const dev1 = new Developer(3,"Abhishek",30000,["CPP","JS","Python"]);

// console.log(dev1.empid);
// dev1.writeCode();

// console.log(dev1.programmingLang);
// // create a senior developer

// const sd = new SeniorDeveloper(4,"Tarun",70000);

// sd.udpateSalary();

// console.log(sd.getSalary());

// sd.writeCode();
// console.log(sd.programmingLang);



// Composition:- big object is formed by combining multiple small objects.

// has a relation

// class Mouse{
//    name;
//    isWireLess;
//    company;
//    constructor(name,isWireLess,company){
//     this.name =name;
//     this.isWireLess=isWireLess;
//     this.company=company;
//    }
// }

// class Storage{
//     name;
//     size;
//     constructor(name,size){
//      this.name=name;
//      this.size=size;
//     }
// }

// class CPU{
//     core;
//     speed;
//     constructor(core,speed){
//      this.core =core;
//      this.speed =speed;
//     }
// }


// class Desktop{
//     constructor(mouse,storage,cpu){
//         this.mouse=mouse;
//         this.storage=storage;
//         this.cpu=cpu;
//     }
// }

// let mouse = new Mouse("gaming",true,"logitech");
// let storage = new Storage("ssd","32gb");
// let cpu = new CPU("2core","2.4ghz");

// let  desk1= new Desktop(mouse,storage,cpu);

// console.log(desk1);
// console.log(desk1.mouse.name);
// console.log(desk1.storage);


// Sync vs Async 

// Javascript is synchronous and singlethreaded langauge.








