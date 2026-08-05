let arr = [2,1,4,5,6,3];
function partition(arr,l,r){
    let pivot = arr[r];
    let temp= l;
    for(let j = l;j<r;j++){
        if(pivot>=arr[j]){
            [arr[j],arr[temp]]=[arr[temp],arr[j]];
            temp++;
        }
    }
    [arr[r],arr[temp]] = [arr[temp],arr[r]]
    return temp;
}

function quickSort(arr,l,r){
   if(l>=r)
    return;
   let partitionIndex=partition(arr,l,r);
   quickSort(arr,l,partitionIndex-1);
   quickSort(arr,partitionIndex+1,r);
}

quickSort(arr,0,arr.length-1);
console.log(arr);

// time complexity ->
Best Case -> (nlogn)
Average Case -> (nlogn)
worst case -> o(n^2) -> //array already sorted or reverse sorted 
// s.c
o(logn)
//inplace- yes 
stable- 


