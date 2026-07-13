// given only english lower case alphabets check it is valid pangram or not.

str = "abcdefghijklmnopzabcd";

let freq={};
for(let i=0;i<str.length;i++){
    if(str[i] in freq){
        freq[str[i]]=freq[str[i]]+1;
    }
    else{
        freq[str[i]]=1;
    }
}

console.log(Object.keys(freq).length==26);


// given two strings check if they are anagram or not

let str1 = "ram";
let str2 = "arm";
// true

console.log(str1.length == str2.length);

