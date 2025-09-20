// Remove duplicates from an array.

let arr = [1,1,2,3,3,4];
let x = new Set(arr);
let y = [...x];
console.log(y)