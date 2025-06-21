Q61.Frequency of Each Character (Using Bitmap / Integer Array)

function charFrequency(str) {
    let freq = new Array(123).fill(0);  // ASCII: 'a' to 'z' is 97-122

    for (let i=0;i<str.length;i++) {
        let ascii = str.charCodeAt(i);
        freq[ascii]++;
    }

    for (let i = 97; i <= 122; i++) {  // only print lowercase letters
        if (freq[i] > 0) {
            console.log(`${String.fromCharCode(i)} : ${freq[i]}`);
        }
    }
}

// Example:
charFrequency("character");


Q62. Check Two Strings Are Anagram Or Not (Using Frequency Array)

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let freq = new Array(123).fill(0);

    for (let ch of str1) {
        freq[ch.charCodeAt(0)]++;
    }

    for (let ch of str2) {
        freq[ch.charCodeAt(0)]--;
    }

    for (let i = 97; i <= 122; i++) {  // check lowercase letters
        if (freq[i] !== 0) return false;
    }

    return true;
}

// Example:
console.log(isAnagram("arc", "car"));    // true
console.log(isAnagram("state", "taste"));// true
console.log(isAnagram("night", "thing"));// true
console.log(isAnagram("apple", "papel"));// true
console.log(isAnagram("test", "rest"));  // false



JavaScript — Set
✅ Definition:
A Set is a built-in collection of unique values (no duplicates allowed).

Exmaple:
let set = new Set();

// Adding elements
set.add(1);
set.add(2);
set.add(3);
set.add(2);  // Duplicate, will be ignored

console.log("Set after adding:", set);  // Set {1, 2, 3}

// Checking existence
console.log(set.has(2));  // true
console.log(set.has(5));  // false

// Deleting an element
set.delete(2);
console.log("After deletion:", set);  // Set {1, 3}

// Looping through the Set
for (let item of set) {
    console.log("Element:", item);
}

// Size of the Set
console.log("Total Elements:", set.size);  // 2

// Clearing all elements
set.clear();
console.log("After clear:", set);  // Set {}

