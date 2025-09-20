// Count vowels and consonants in a string.

let str = "Lokesh";
let vowels = 0;
let consonants = 0;
for(let ch of str){
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        vowels++;
    }
    else{
        consonants++;
    
    }
}
console.log(vowels)
console.log(consonants);