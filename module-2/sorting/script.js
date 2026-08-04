let arr = [3,1,2,5,7];

function merge(l,mid,r){
    let a =  arr.slice(l,mid+1);
    let b = arr.slice(mid+1,r+1);
    //merge two sorted array 
    let res = [];
    let first =0,second =0;
    while(first<a.length && second<b.length){
        if(a[first]<b[second]){
            res.push(a[first]);
            first++;
        }
        else{
            res.push(b[second]);
            second++;
        }
    }
    while(first<a.length){
        res.push(a[first]);
        first++;
    }
    while(second<b.length){
        res.push(b[second]);
        second++;
    }
   //loop
   for(let k=0;k<res.length;k++){
    arr[l+k] = res[k];
   }
}


function mergeSort(l,r){
    if(l>=r)
      return;
    let mid = Math.floor((l+r)/2)
    mergeSort(l,mid);
    mergeSort(mid+1,r);
    // console.log(l,mid,r);
    merge(l,mid,r);
}

mergeSort(0,arr.length-1);

console.log(arr);
// stable -(Home Work)
// inplace -
// t.c -  Best Case -> o(nlog2(n)) Average case-> n(log2(n)) worst case -> n(log2(n))
// s.c - o(n)

// quick sort 

function pivotIndex(l,r,arr){
    

 }

function quickSort(arr,l,r){
  if(l<r){
    pivotIndex=pivotIndex(l,r,arr);
    quickSort(arr,l,pivotIndex-1);
    quickSort(arr,pivotIndex+1,r);
  }
  return arr;
}

quickSort(arr,0,n-1)

