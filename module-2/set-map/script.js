//  Different operations on array


// let arr = [1,3,5,3,2,6];

// console.log(arr[1]); // o(1)

// console.log(arr.length); //o(1)

// push -> insert an item at the end -> o(1)
// pop -> pop an item from the end -> o(1)
// shift-> pop an item from the start  -> o(n)
// unshift -> insert an item at the start -> o(n)


// search item 
// array sorted -> binary search o(log2(n))
// array unsorted -> linear search o(n)

// slice -> 
// splice -> 
// reverse -> o(n)
// sort -> o(nlogn)


// Map 
//  -> store the data in form key and value pair
//  -> maintains insertion
//  -> key can'nt duplicate 
//  -> key can be anything 

// create a Map
// let mp = new Map();
// console.log(mp);

// create a map with intial value

// user and marks
// let mp = new Map([
//   ["Abhishek",20],
//   ["Pranjal",40],
//   ["Samay",80]
// ]);


// console.log(mp);


// set get delete has  clear 

// set -> o(1)
// let mp = new Map();
// mp.set("Abhishek",20);
// mp.set("Pranjal",40);

// console.log(mp);

// // get -> o(1)
// console.log(mp.get("Abhishek"));
// console.log(mp.get("Pranjal"));

// // has -> o(1)

// console.log(mp.has("Abhishek"))


// // clear -> O(n)
// mp.clear();
// console.log(mp);


// // size  -> o(1)
// console.log(mp.size);


// create a map and store 
// name of the  5 person and their age

// let mp = new Map();
// mp.set("Abhishek",20);
// mp.set("Naresh",240);
// mp.set("Suresh",60);
// mp.set("Nitesh",80);



// // convert map in to array

// console.log([...mp]); // o(n)

// convert array in to map 
// let arr = [[1,2],[3,4],[4,5]]
// let hash = new Map(arr)
//T.c-> o(n)
//S.c -> o(n)


// iteration
// let mp = new Map([[1,2],[3,4],[4,5]]);


// // approach 1
// for(let prop of mp){
//     let key = prop[0];
//     let value = prop[1];
//     console.log(key,value);
// }

// // approach 2
// for(let prop of mp){
//     let [key,value] = prop;
//     console.log(key,value);
// }

// // approach 3

// for(let [key,value] of mp){
//     console.log(key,value);
// }


// let mp = new Map([[1,2],[3,4],[4,5]]);
// // find all the key of mp

// console.log(mp.keys()); // o(n)

// // find all the values of mp
// console.log(mp.values()); // o(n)

// // 
// console.log(mp.entries()); //o(n)

// // delete 
// mp.delete(1); // o(1)


// // update 

// mp.set(3,5);
// console.log(mp);

//  given an array find the frequency each item

let arr = [1,1,2,3,4,4];
// 1->2
// 2->1
// 3->1 
// 4-> 2

let freq = new Map();

for(let val of arr){
    if(freq.has(val)){
       let count= freq.get(val);
       freq.set(val,count+1);
    }else{
        freq.set(val,1);
    }
}

console.log(freq);


// T.c -> o(n)
// S.c-> o(n)

//h.w
// what is the difference object  
// and map and advantage map over object.
// 
let data = [
  {name:"Brijesh",city:"Pune"},
  {name:"Brijesh",city:"Delhi"},
  {name:"Abhishek",city:"Chandigarh"},
  {name:"Mahesh",city:"Mumbai"}
]

// transfomrm -> group by name 
let transformedData = {
    "Brijesh":["Pune","Delhi"],
    "Abhishek":["Chandigarh"],
    "Mahesh":["Mumbai"]
}

let mp = new Map();
for(let val of data){
    if(mp.has(val.name)){
       mp.get(val.name).push(val.city);
    }
    else{
        mp.set(val.name,[val.city]);
    }
}

console.log(mp);



// words = ["cat","tac","pat","tap","atp","chat"];

[
    ["cat","tac"],
    ["pat","tap","atp"],
    ["chat"]
]







