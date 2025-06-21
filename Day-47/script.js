/* Strings */

// 1. String Length
let s = "Hello World";
console.log(s.length); // 11

// 2. String Substring
console.log(s.substring(0, 5)); // Hello
console.log(s.substring(6, 11)); // World
console.log(s.substring(6)); // World

// 3. String Slice
console.log(s.slice(0, 5)); // Hello
console.log(s.slice(6, 11)); // World
console.log(s.slice(6)); // World
console.log(s.slice(-5)); // World
console.log(s.slice(-5, -1)); // Worl

// 4. String Concat
console.log(s.concat("!!!")); // Hello World!!!
console.log(s.concat("!!!", " How are you?")); // Hello World!!! How are you?

// 5. String trim
let str = "   Hello World   ";
console.log(str.trim()); // Hello World
console.log(str.trimStart()); // Hello World
console.log(str.trimEnd()); // Hello World

// 6. String indexOf
console.log(s.indexOf("o")); // 4
console.log(s.indexOf("o", 5)); // 7
console.log(s.indexOf("o", 8)); // -1

/* Accept a string from user and print its each character on a new line */

let str1 = "Hello World";
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

/* print string in reverse order */

let str2 = "Hello World";
let str3 = "";
for (let i = str2.length - 1; i >= 0; i--) {
  str3 += str2[i];
}
console.log(str3); // dlroW olleH

/* Q 57. Pallindromic String  using Two pointer algorithm (hint: Array reverse algo) */

let str4 = "madam";
let left = 0,
  right = str4.length - 1;
let isPalindrome = true;

while (left < right) {
  if (str4[left] !== str4[right]) {
    isPalindrome = false;
    break;
  }
  left++;
  right--;
}
if (isPalindrome) {
  console.log(`${str4} is a palindrome`);
} else {
  console.log(`${str4} is not a palindrome`);
}
