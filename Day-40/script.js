/* — Q 29. Array left rotation by K elements */

/* let arr = [1, 2, 3, 4, 5];
let k = 7;
k = k % arr.length;

for (let j = 1; j <= k; j++) {
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = temp;
}

console.log(arr);
 */

/* let arr = [1, 2, 3, 4, 5];
let k = 7;
k = k % arr.length;
let temp = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + k) % arr.length];
}

arr = temp;
console.log(arr);
 */

/* let arr = [1, 2, 3, 4, 5];
let k = require("prompt-sync")()("Enter the number of rotations: ");
k = k % arr.length;
reverse(arr, 0, k - 1);
reverse(arr, k, arr.length - 1);
reverse(arr, 0, arr.length - 1);
console.log(arr);

function reverse(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
 */

/* ------------------------------------------------------------------------------------------- */

/* — Q 30. Linear Search an array - If element found print the index else -1 */

/* let arr = [10, 5, 3, 15, 19, 69, 20];
let prompt = require("prompt-sync")();
let target = Number(prompt("Enter the element to search: "));
let index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    index = i;
    break;
  }
}

if (index !== -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log("Element not found in the array");
}
 */

/* ------------------------------------------------------------------------------------------- */

/* — Binary Search */

let arr = [10, 23, 45, 67, 69, 190, 200];
let prompt = require("prompt-sync")();
let target = Number(prompt("Enter the element to search: "));

if (binarySearch(arr, target) === -1) {
  console.log("Element not found in the array");
} else {
  console.log(
    "Element found in the array at index " + binarySearch(arr, target)
  );
}

function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
