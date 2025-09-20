//Count the frequency of each character in a string.

let str = "lokesh";
freq = {};
for(let ch of str){
    if(ch in freq){
        freq[ch]+=1;
    }
    else{
        freq[ch]=1;
    }
}
console.log(freq)