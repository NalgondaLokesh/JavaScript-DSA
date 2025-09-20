//Convert a string to title case (capitalize first letter of each word).

let sent = "hello world my name is lokesh";
sent = sent.split(" ");
sent1 = sent.map((x)=>x[0].toUpperCase()+x.slice(1));
sent2 = sent1.join(" ");
console.log(sent2)