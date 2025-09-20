// Find the longest word in a sentence.

let sent = "hello world my name is nalgondalokesh and alexanderflemming";

sent = sent.split(" ");
maxLength = 0;
maxWord = "";
for(let i=0;i<sent.length;i++){
    if(maxLength<=sent[i].length){
        maxLength = sent[i].length;
        maxWord = sent[i];
    }
}
console.log(maxWord);