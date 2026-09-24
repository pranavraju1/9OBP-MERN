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



// merge sort 
let arr = [5,4,3,6,8];

function merge(l,mid,r,arr){
    let arr1 = arr.slice(l,mid+1);
    let arr2 = arr.slice(mid+1,r+1);

    let i=0,j=0;
    let n=arr1.length,m=arr2.length;
    let res=[];

    while(i<n && j<m){
        if(arr1[i]<=arr2[j]){
           res.push(arr1[i]);
           i++;
        }else{
            res.push(arr2[j]);
            j++;
        }
    }

    while(i<n){
        res.push(arr1[i]);
        i++;
    }

    while(j<m){
        res.push(arr2[j]);
        j++;
    }



   for(let k=0;k<res.length;k++){
      arr[l+k]=res[k];
   }



}

function mergeSort(l,r,arr){
      if(l>=r){
       return;
      }
      let mid = Math.floor((l+r)/2);
      mergeSort(l,mid,arr);
      mergeSort(mid+1,r,arr);
      merge(l,mid,r,arr);
}

mergeSort(0, arr.length-1, arr);

console.log(arr);
