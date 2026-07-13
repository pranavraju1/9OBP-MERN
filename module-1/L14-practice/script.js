let arr = [1,2,3,4,5];
let k = 2;
for(let i=0;i<k;i++){
  let last_item = arr.pop();
  arr.unshift(last_item);
}

console.log(arr);