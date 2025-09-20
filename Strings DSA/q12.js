//Remove spaces from a string.

let str = "hello world my name is lokesh";
let ans = "";
for(let ch of str){
    if(ch!=" "){
        ans = ans+ch;
    }
}
console.log(ans);