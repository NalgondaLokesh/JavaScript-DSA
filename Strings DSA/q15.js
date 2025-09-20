let str = "   nalgonda     lokesh   ";
str = str.trim();
str = str.split(" ");
console.log(str);
res = "";
let word = str[i].replace(" ", "");
for(let i=0;i<str.length;i++){
    if(str[i].length>0){
        res += str[i]+" ";
    }
}
console.log(res)
