// given an array and a target if target present in the array 
// then return the index otherwise -1


// linear Search -> in the linear search iterate in the array linearly 
// and compare the item one by one until target is found or reach till the end of the array.
// let arr = [1,2,2,3,4,5];

// function linearSearch(target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i;
//         } 
//     }
//     return -1;
// }

// console.log(linearSearch(2));  //1
// console.log(linearSearch(3));  //3


// print name of the person who is more than 30 years old
let persons = [
    {
        name: "akshay",
        age: 5,
        city: "delhi"
    },
    {
        name: "nikhil",
        age: 31,
        city: "delhi"
    },
    {
        name: "suresh",
        age: 35,
        city: "delhi"
    },
    {
        name: "mahesh",
        age: 10,
        city: "delhi"
    }
]

for(let i=0;i<persons.length;i++){
    if(persons[i].age>30)
        console.log(persons[i].name);
}


