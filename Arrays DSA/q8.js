// Find union of two arrays

let a = [1,2,3,4];
let b = [3,4,5,6,7,8];
let x = new Set(a);
let y = new Set(b);
let union_array = x.union(y);
union_array = [...union_array];
console.log(union_array)