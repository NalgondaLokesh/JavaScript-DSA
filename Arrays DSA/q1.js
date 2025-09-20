let arr = [1,2,4,5,5,6,7,8,9,10];
let sum = 0;
let evenCount = 0;
let oddCount = 0;
console.log(`Max element is ${Math.max(...arr)}`);
console.log(`Min element is ${Math.min(...arr)}`);
console.log(arr.toReversed());
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    if(arr[i]%2===0){
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log(`Sum of array is ${sum}`)
console.log(`Even count is ${evenCount}`)
console.log(`Odd count is ${oddCount}`)
