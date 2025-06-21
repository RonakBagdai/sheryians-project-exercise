Notes of the Day-51

Q35. Print each character on a new line
function printEachChar(str) {
    for (let char of str) {
        console.log(char);
    }
}

// Example usage:
printEachChar("Hello");

Q36. Print string in reverse order
function printReverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}

// Example usage:
printReverse("Hello"); // Output: "olleH"

Q37. Check if string is palindrome (using two-pointer)
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example usage:
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

Q38. Toggle each alphabet using ASCII values
function toggleCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // A-Z
            result += String.fromCharCode(charCode + 32); // to lowercase
        } else if (charCode >= 97 && charCode <= 122) { // a-z
            result += String.fromCharCode(charCode - 32); // to uppercase
        } else {
            result += str[i]; // non-alphabetic characters remain same
        }
    }
    return result;
}

// Example usage:
console.log(toggleCase("AcgDfD")); // Output: "aCGdFd"

Q39. Count words with given prefix
function countPrefix(words, pref) {
    let count = 0;
    for (let word of words) {
        if (word.startsWith(pref)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countPrefix(["pay","attention","practice","attend"], "at")); // Output: 2

Q40. Capitalize first & last character of each word
let s = "hello bhai kya haal chaal";
let ans = "";
let arrStr = s.split(" ");
for(let i=0;i<arrStr.length;i++){
   let word = arrStr[i]
   if(word.length<=2) ans = ans + word.toUpperCase()+" ";
   else {
     ans = ans + word.charAt(0).toUpperCase() 
               + word.substring(1,word.length-1)
               + word.charAt(word.length-1).toUpperCase()+" ";
   }
}
console.log(ans);