// Check if two strings are anagrams.
let word1 = "anagram"
let word2 = "nagaram"
word1 = word1.split("").sort()
word2 = word2.split("").sort()
if(word1.join("")===word2.join("")){
    console.log("anagram");
}
else{
    console.log("not anagram");

}