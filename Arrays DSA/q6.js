// Merge two sorted arrays into a single sorted array.

let a = [1,3,5];
let b = [2,4,6];
let ans = [...a,...b];
console.log(ans.sort((a,b)=>a-b))