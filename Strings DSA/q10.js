// Find the most frequent character in a string.

let str = "programming";
let freq = {};
let maxChar = "";
let maxCount = 0;
for(let ch of str){
    freq[ch] = (freq[ch]||0)+1;
    if(freq[ch]>=maxCount){
        maxCount = freq[ch];
        maxChar = ch;
    }
}
console.log(maxChar);