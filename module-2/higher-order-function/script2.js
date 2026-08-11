// // map -> map process alll the item of the array and return new array.
// // filter-> filter process item of the array and if condition is true it include the item other exclude.


// let persons = [
//   {
//     name:"Abhishek",
//     age:17,
//   },
//   {
//     name:"Shivam",
//     age: 20
//   },
//   {
//     name:"Brijesh",
//     age:22
//   }
// ]

// // eligible if age is greater or equal to 18.
// // print the array of eligible person.

// // ["Shivam","Brijesh"]

// // approach 1

// // function isEligible(person){
// //    return person.age>=18;
// // }

// // let eligible=persons.filter(isEligible);

// // function transform(person){
// //      return person.name;
// // }

// // let transformedData = eligible.map(transform);

// // console.log(transformedData);

// let persons = [
//   {
//     name:"Abhishek",
//     age:17,
//   },
//   {
//     name:"Shivam",
//     age: 20
//   },
//   {
//     name:"Brijesh",
//     age:22
//   }
// ]

// // approch 2 
// function isEligible(person){
//    return person.age>=18;
// }

// function transform(person){
//    return person.name;
// }

// let transformedData = person.filter(isEligible).map(transform);
// console.log(transformedData);



// let libraries = [
//     {
//         name: "accio1",
//         location: "Pune",
//         books: [
//             {
//                 subject: "physics",
//                 author: "H.C verma"
//             },
//             {
//                 subject: "math",
//                 author: "R.D Sharma"
//             },
//             {
//                 subject: "math2",
//                 author: "R.D Sharma"
//             }
//         ]
//     },
//     {
//         name: "accio2",
//         location: "Delhi",
//         books: [
//             {
//                 subject: "Geography",
//                 author: "M.k bharti"
//             },
//             {
//                 subject: "math",
//                 author: "R.D Sharma"
//             },
//             {
//                 subject: "physics",
//                 author: "H.C verma"
//             }
//         ]
//     }
// ]

// return array consisting of name of the library which has more 2 books.
// function bookCount(library){
//    return library.books.length>2;
// }

// function transform(library){
//     return library.name;
// }

// let res = libraries.filter(bookCount).map(transform);
// console.log(res);

//return the name of the libraries that does'nt have any physics book.
// function checkPhysics(library){
//     for(let book of library.books){
//         if(book.subject=="physics"){
//             return false;
//         }
//     }
//     return true;
// }

// function transform(library){
//    return library.name;
// }

// let res=libraries.filter(checkPhysics).map(transform);

// console.log(res);

//H.w
// return the name of the libraries that have atleast 2 books 
//  and also have 
// atleast one book of mathematics 

// reduce function -> // higher order function
// reduce function process all the elements of the array
// and accumlate the result in to single value.


// syntax 
//   function callback(accum,curr){
//     //   return update value of accumlator
//   }

// arr.reduce(callback,intialValueofAccumlator)


// let arr = [3,4,2,1,5];

// function calculateTotal(accum,curr){
//     return accum+curr;
//  }

//  let sum=arr.reduce(calculateTotal,0);
//  console.log(sum);


// product of an array
// let arr = [5,2,3,4];


// function calculateProdcut(accum,curr){
//     return accum*curr;
// }

// let product = arr.reduce(calculateProdcut,1);
// console.log(product);

// 
// let library = {
name: "accio1",
    location: "Pune",
        books: [
            {
                subject: "physics",
                author: "H.C verma",
                price: 200,
            },
            {
                subject: "math",
                author: "R.D Sharma",
                price: 300,
            },
            {
                subject: "math2",
                author: "R.D Sharma",
                price: 500
            }
        ]
    };

//  find total price of the books 
// function calculatePrice(accum,curr){
//   return accum+curr.price;
// }

// let totalPrice=library.books.reduce(calculatePrice,0);



// library.totalPrice =totalPrice;

// console.log(library);

//H.w
let students = [
    { name: "Abhshek", grade: "A" },
    { name: "Suresh", grade: "B" },
    { name: "Naresh", grade: "C" },
    { name: "Gagan", grade: "A" },
    { name: "Atharva", grade: "B" },
]


// group by grade 
let res= {
  A:["Abhishek","Gagan"],
  B:["Atharva","Suresh"],
  C:["Naresh"]
}

