/* 
    Q 61. Accept a string and print the frequency of each character present in the string
*/

// let prompt = require("prompt-sync")();
// let str = prompt("Enter a string: ");
// let frequency = new Array();
// let order = [];

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (frequency[char]) {
//     frequency[char]++;
//   } else {
//     frequency[char] = 1;
//     order.push(char);
//   }
// }
// console.log("Frequency of each character:");
// for (let i = 0; i < order.length; i++) {
//   let char = order[i];
//   console.log(`${char}: ${frequency[char]}`);
// }

let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let frequency = {};
let order = [];

for (let char of str) {
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
    order.push(char);
  }
}

order.sort((a, b) => str.indexOf(a) - str.indexOf(b));

console.log("Frequency of each character:");
for (let char of order) {
  console.log(`${char}: ${frequency[char]}`);
}



/*
    Q 62. Check Two Strings are Anagram or NotAnagrams words have the same word length & same character countExamples of anagram words are arc and car, state and taste,night and thing etc.
*/

// let prompt = require("prompt-sync")();
// let str1 = prompt("Enter first string: ");
// let str2 = prompt("Enter second string: ");
// let frequency = [];

// if (str1.length !== str2.length) {
//   console.log("Not Anagrams");
// }
// else {
//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     if (frequency[char]) {
//       frequency[char]++;
//     } else {
//       frequency[char] = 1;
//     }
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if (frequency[char]) {
//       frequency[char]--;
//     } else {
//       console.log("Not Anagrams");
//       break;
//     }
//   }

//   console.log("Anagrams");
// }

/*
    Q 64. Check if the pangram or not
    A pangram is a sentence that contains every letter of the alphabet at least once.
    For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram because it contains every letter of the English alphabet.
*/

// let checkIfPangram = (str) => {
//   return new Set(str.toLowerCase().match(/[a-z]/g)).size === 26;
// };

// let str = "The quick brown fox jumps over the lazy dog";
// console.log(checkIfPangram(str) ? "Pangram" : "Not Pangram");



function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequency = {};

  for (let char of str1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!frequency[char]) {
      return false;
    }
    frequency[char]--;
  }

  return true;
}