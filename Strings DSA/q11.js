// Find All Substrings of a String

let str = "abcd";
let substr = [];
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
        substr.push(str.slice(i,j));
    }
}
console.log(substr)