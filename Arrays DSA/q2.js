// (Find Second Largest Unique Number)

let arr = [10,20,0,40,50,50];
arr.sort((a,b)=>a-b);
let x = new Set(arr);
let y = [...x];
console.log(y)
console.log(`Second largest element is ${y[y.length-2]}`);

