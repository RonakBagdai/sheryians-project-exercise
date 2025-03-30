/* ---------------------- Arrays ----------------------- */

// let arr = [1, 2, 3, 4]
// arr[10] = 10;
// console.log(arr[6]);
// console.log(arr.length);

// let arr1 = new Array(4);
// arr1.push(1);
// console.log(arr1);

// let prompt = require("prompt-sync")();
// let size = +prompt("Enter the size of the array: ");
// let arr = new Array(size);
// let sum = 0;
// for (let i = 0; i < size; i++) {
//   arr[i] = +prompt(`Enter the element at index ${i}: `);
//   sum += arr[i];
// }
// console.log(sum);

/* — Q 24. Max element from array */

let arr = [30, 60, 20, 10, 40, 50];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Max element is: ", max);

/* — Q 25. Min element from array */

let arr1 = [30, 60, 20, 10, 40, 50];
let min = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < min) {
    min = arr1[i];
  }
}

console.log("Min element is: ", min);
