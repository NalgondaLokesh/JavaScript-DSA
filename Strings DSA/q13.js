let str = "programming"
let freq = {};
for(let ch of str){
    if(freq[ch]){
        freq[ch]+=1;
    }
    else{
        freq[ch]=1;
    }
}
console.log(freq);
for(let ch in freq){
    if(freq[ch]===1){
        console.log(ch);
        break;
    }
}