/* 
    Q 57. Pallindromic String  using Two pointer algorithm (hint: Array reverse algo)
*/

/*

let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let isPalindrome = true;
let i = 0,
  j = str.length - 1;

while (i < j) {
  if (str[i] !== str[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPalindrome) {
  console.log("The string is a palindrome.");
} else {
  console.log("The string is not a palindrome.");
} 
  
*/

/* 
    Q 58. Toggle each alphabet of String
    In - AcgDfD Output - aCGdFd
*/

/* 

let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    result += str[i].toLowerCase();
  } else {
    result += str[i].toUpperCase();
  }
}
console.log(result);

*/

/* 

let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let result = "";

for (let i = 0; i < str.length; i++) {
  let charCode = str.charCodeAt(i);
  if (charCode >= 65 && charCode <= 90) {
    result += String.fromCharCode(charCode + 32);
  } else if (charCode >= 97 && charCode <= 122) {
    result += String.fromCharCode(charCode - 32);
  } else {
    result += str[i];
  }
}
console.log(result);

 */

/*
    Q 59. Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix.
    Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
    Output: 2
*/

/*

let word = ["attention", "people", "attire", "hello", "attend"];
let pref = "at";
let count = 0;
for (let i = 0; i < word.length; i++) {
  if (word[i].startsWith(pref)) {
    count++;
  }
}
console.log(count);

*/

/* 
    Q 60. Capitalize first & last character of each wordin the sentence and print the new sentence
    Ex -  Hello bhai Kaise ho a
    HellO BhaI KaisE HO A
*/

let str = "java is fun";
let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let firstChar = word.charAt(0).toUpperCase();
  let middleChars = word.slice(1, -1);
  let lastChar = word.charAt(word.length - 1).toUpperCase();
  result += firstChar + middleChars + lastChar + " ";
}
result = result.trim();
console.log(result);

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (word.length <= 2) result += word.toUpperCase() + " ";
  else {
    result +=
      word.charAt(0).toUpperCase() +
      word.slice(1, -1) +
      word.charAt(word.length - 1).toUpperCase() +
      " ";
  }
}

// console.log(result);
