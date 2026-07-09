// question 1 

// create an array of object person consisting of firstname and lastname age and sort
//  based on the age in ascending
// if two person have same age then sort acording to the firstname 
// in lexicographical order

// let persons = [
//     {
//         firstName: "Tarun",
//         lastName: "Pandey",
//         age: 15,
//     },
//     {
//         firstName: "Nilay",
//         lastName: "Patel",
//         age: 12,
//     },
//     {
//         firstName: "Yash",
//         lastName: "Kulkarani",
//         age: 11,
//     },
//     {
//         firstName: "Rutuj",
//         lastName: "Kulkarani",
//         age: 11,
//     }
// ]

// function comp(a,b){
//     if(a.age == b.age){
//        return a.firstName.localeCompare(b.firstName);
//     }else{
//        return a.age-b.age;
//     }
// };

// persons.sort(comp);

// console.log(persons);

//localeCompare-> 

// lexigraphically a < b return -1
// lexigraphically a>b return 1;
// strings are same return 0

// let a = "Check";
// let b = "Chuck";
// let ans = a.localeCompare(b);
// console.log(ans);  // -1


// let a = "banana";
// let b = "apple";
// let ans = a.localeCompare(b);
// console.log(ans);  // 1



// let a = "apple";
// let b = "apple";
// let ans = a.localeCompare(b);
// console.log(ans);  //0



// let arr = ["Brijesh","Mahesh","Ramesh","Gukesh"];
// // sort array in reverse lexicoraphical order

// function comp(a,b){
//     return b.localeCompare(a);
// }

// arr.sort(comp);
// console.log(arr);


let persons = [
    {
        firstName: "Tarun",
        lastName: "Pandey",
        age: 15,
    },
    {
        firstName: "Nilay",
        lastName: "Patel",
        age: 12,
    },
    {
        firstName: "Yash",
        lastName: "Kulkarani",
        age: 11,
    },
    {
        firstName: "Rutuj",
        lastName: "Kulkarani",
        age: 11,
    },
    {
        firstName: "Rutuj",
        lastName: "Ingale",
        age: 11,
    }
]


// create an array of object person consisting of firstname and lastname age and sort
//  based on the age in ascending
// if two person have same age then sort acording to the firstname 
// in lexicographical order if firstname is same then sort it based on lastName


// function comp(a,b){
//     if(a.age == b.age){
//         if(a.firstName.localeCompare(b.firstName)==0){
//             return a.lastName.localeCompare(b.lastName);
//         }
//         else{
//             return a.firstName.localeCompare(b.firstName);
//         }
//     }else{
//        return a.age-b.age;
//     }
// };

// persons.sort(comp);

// console.log(persons);


// print the second most frequent digit in a number.
let a = 12344555;

let obj = {};

while(a>0){
  let last_digit = a%10;
   if(last_digit in obj){
    obj[last_digit]+=1;
   }else{
    obj[last_digit]=1;
   }
  a=parseInt(a/10);
}

console.log(obj);

//H.w
// frequencey already find second most frequent


// conver the given object to an array of object 
let obj={ '1': 1, '2': 1, '3': 1, '4': 2, '5': 3 };
res = [
    {
        '1':1
    },
    {
        '2':1
    },
    {
        '3':1
    },
    {
        '4':2
    },
    {
        '5':3
    }
].