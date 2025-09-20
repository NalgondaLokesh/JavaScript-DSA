// Find missing number in an array of 1 to n.

let arr = [1,4,5,3];
let n = 5;
let actualSum = 0;
for(let i=0;i<arr.length;i++){
    actualSum+=arr[i];
}

let expectedSum = Math.floor((n*(n+1))/2)
console.log(expectedSum-actualSum)