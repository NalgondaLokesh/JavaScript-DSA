//Check if a string is a palindrome.

let str = "madam";
str = str.split("");
strRev = str.toReversed();
if(strRev.join("")===str.join("")){
    console.log("palindrome");
}
else{
    console.log("not palindrome")
}