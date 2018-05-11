//2.	Reverse a string
//a.	Write a function that takes a string as input and returns the string reversed
//b.	i.e. “Hello” will be returned as “olleH”

let originalWord = "confusion";
let reversedWord = "";

function reverseString (oringalWord) {

for (let i = originalWord.length-1; i>=0; i--){
	reversedWord += originalWord[i];
	console.log(reversedWord);
}
}
reverseString(originalWord);