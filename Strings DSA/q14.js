// largest common prefix in array

let arr = ["flower","flow","flight"];
arr.sort();
let ans = "";

let first = arr[0].split("");
let last = arr[arr.length-1].split("");
for(let i=0;i<first.length;i++){
    if(first[i]==last[i]){
        ans = ans + first[i];
    }
    else{
        break;
    }
}
console.log(ans)