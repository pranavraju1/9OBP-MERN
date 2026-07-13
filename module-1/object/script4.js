// let person = [
//   {
//      name:"Akshay",
//      age:10,
//      profession:"Software developer"
//   },
//    {
//      name:"Akash",
//      age:20,
//      profession:"Plumber"
//   },
//    {
//      name:"Aniket",
//      age:15,
//      profession:"Painter"
//   }
// ]

// //Akshay-10-Software Developer
// //Akash-20-plumber
// //Aniket-15-Painter
// for(let i=0;i<person.length;i++){
//     console.log(`${person[i].name}-${person[i].age}-${person[i].profession}`);
// }

// 

// let person = {
//     city: "Delhi",
//     printCity: function () {
//         console.log(this.city);
//     },
//     address: {
//         city: "Pune",
//         printCity: function () {
//             console.log(this.city);
//         }
//     }
// }

// person.address.printCity(); //Pune

// object destrucuting

// let book ={
//     id:1,
//     title:"Nothing",
//     author:"Unknown",
//     price:10
// }

// console.log(book.id,book.title,book.author); // 1 Nothing Unknown

// let {id,title,author} =book;
// console.log(id,title,author); // 1 Nothing Unknown


// extract price author
// let {price,author}=book;
// console.log(price,author); // 10 Unknown

// let book ={
//     id:1,
//     title:"Nothing",
//     author:"Unknown",
//     price:10,
//     publisher:"naman"
// };

// let {id,title,publisher} = book;
// console.log(id,title,publisher) //1 Nothing undefined

// if pulisher given then print the pulisher  
// othewise print the default pulisher name (Arihant)

// let defValue= "Arihant";

// if(book.publisher){
//     console.log(book.id,book.title,book.publisher);
// }
// else{
//     console.log(book.id,book.title,defValue);
// }

// let {id,title,publisher="Arihant"}=book;
// console.log(id,title,publisher); // 1 Nothing Naman

// function parameter
let book ={
    id:1,
    title:"Nothing",
    author:"Unknown",
    price:20,
    publisher:"naman"
};

// function bookPara(id,title,price){
//     console.log(`book with id ${id} and title ${title} have price ${price}`);
// }

// bookPara(book.id,book.title,book.price); // need to write book. so many times

// function bookPara({id,title,price=10}){
//     console.log(`book with id ${id} and title ${title} have price ${price}`);
// }

// bookPara(book);

// rest -> pack/group key and  values  pairs inside an object

// let person = {
//     firstName:"Tarun",
//     secondName:"Pandey",
//     age:10,
//     skill:{
//         "level1":"node.js",
//         "level2":"React.js"
//     }
// }

// let {firstName,...rest}=person;
// console.log(firstName,rest);
// fristname = "Tarun"
//rest= {
//     secondName:"Pandey",
//     age:10,
//     skill:{
//         "level1":"node.js",
//         "level2":"React.js"
//     }
// }


// can use rest operator in function parameter
// function printPerson({firstName,...rest}){
//     console.log("Name of the person is",firstName);
//     console.log(rest);
// }

// printPerson(person);

//

// Task 1
// let obj = {
//     a:1,
//     b:2,
//     c:3
// }

// let copy = obj;

// copy.d = 4;

// console.log(copy,obj);


// let oldObj ={
//     a:1,
//     b:2,
//     c:3
// }

// let newObj={
//     a:1,
//     b:2,
//     c:3
// }

// console.log(newObj == oldObj) // false

//spread operator - unpack the key and value pair from the object

// this kind of unpacking is not allowed
//  let person = {
//      firstName:"Tarun",
//      secondName:"Pandey"
//  }

//  console.log(...person);

// spread operator can be used to copy object 
//   let person = {
//      firstName:"Tarun",
//      secondName:"Pandey"
//  }
 
//  let copy = {
//     ...person
//  }

//  console.log(copy); // shallow copy 

// task1 h.w

// spread operator can be used to merge object
// let person = {
//     firstName:"akshay",
//     lastName:"Bhardwaj",
//     address:{
//         location:"baner",
//         city:"Pune"
//     }
// }

// let otherDetails = {
//     age:20,
//     salary:1000000
// } 

// let newObj = {...person,...otherDetails};
// console.log(newObj);

// combine them
// {
//     firstName:"akshay",
//     lastName:"Bhardwaj",
//     address:{
//         location:"baner",
//         city:"Pune"
//     },
//      age:20,
//     salary:1000000
// }


// spread operator ->
// spread operator spread the elements of an itertable or object in to another 
// iteratable or object. copy, add , merge , update 

// copying object using spread operator
// let person1 = {
//     name:"akshay",
//     age:10
// }

// let person2 = {
//     ...person1
// };

// console.log(person2); // {name:"akshay",age:10}

// add new property to the object using spread operator

// let person = {
//     name:"tushar",
//     age:20
// }

// let newPerson ={
//     ...person,
//     city:"Delhi"
// }
// console.log(newPerson); //{ name: 'tushar', age: 20, city: 'Delhi' }

// update using spread operator

// let person = {
//     name:"tushar",
//     age:20
// }

// let newPerson = {
//     ...person,
//     age:25
// }

// console.log(newPerson);  //{ name: 'tushar', age: 25 }


// let person = {
//     name:"tushar",
//     age:20
// }

// let newPerson = {
//     age:25,
//     ...person
// }

// console.log(newPerson); //{ name: 'tushar', age: 20 }

// merge
// let person = {
//     name:"tushar",
//     age:20
// }

// let address = {
//     city:"Pune",
//     location:"Baner"
// }

// let personWithAddress = {
//     ...person,...address
// }

// console.log(personWithAddress);  //{ name: 'tushar', age: 20, city: 'Pune', location: 'Baner' }


// shallow copy - spread operator  creates shallow copy
// copy the first level and share the reference of nested level (object or array)

// let person = { 
//     name: 'tushar', 
//     age: 20, 
//     address:{
//         city: 'Pune', 
//         location: 'Baner'
//     } 
// };


// let copy = {...person};

// copy.race="Asian";

// copy.address.pincode=140413;

// console.log("copy objet is",copy);
// console.log("person object is ",person);


// Deep Copy - all the levels will be copied recursivly one by one. there is no shared referece.(structuredClone,json.parse(json.strigify))
// let person = { 
//     name: 'tushar', 
//     age: 20, 
//     address:{
//         city: 'Pune', 
//         location: 'Baner'
//     } 
// };

// let copy = structuredClone(person);

// copy.address.pincode = 140413;
// console.log("copy object is ", copy);

// console.log("older object is ",person);








