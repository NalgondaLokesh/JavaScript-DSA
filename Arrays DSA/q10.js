// Move all zeros to the end while maintaining order.
let arr = [1, 0, 2, 0, 3, 0, 4];
let zeroCount = 0;
let results = [];
for(let num of arr){
    if(num!=0){
        results.push(num);
    }
    else{
        zeroCount++;
    }
}
for(let i=0;i<zeroCount;i++){
    results.push(0);
}
console.log(results);
console.log(zeroCount);

