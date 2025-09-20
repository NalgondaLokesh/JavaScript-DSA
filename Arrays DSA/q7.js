// Find intersection of two arrays.

let set1 = [1,2,3,4];
let set2 = [2,4,6];
let x = new Set(set1);
let y = new Set(set2);
let ans = x.intersection(y);
ans = [...ans];
console.log(ans)