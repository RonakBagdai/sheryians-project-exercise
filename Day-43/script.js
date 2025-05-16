// Multidimensional Array

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     process.stdout.write(`${arr[i][j]} `);
//   }
//   console.log();
// }

// let prompt = require("prompt-sync")();
// let innerArraySize = Number(prompt("Enter the size of inner array: "));
// let arr = new Array(innerArraySize);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(3);
// }
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = Number(prompt(`Enter the value of arr[${i}][${j}]: `));
//   }
// }

// console.log("The multidimensional array is: ");
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     process.stdout.write(`${arr[i][j]} `);
//   }
//   console.log();
// }

// 3d array

// let arr = [
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   [
//     [10, 11, 12],
//     [13, 14, 15],
//     [16, 17, 18],
//   ],
//   [
//     [19, 20, 21],
//     [22, 23, 24],
//     [25, 26, 27],
//   ],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//       process.stdout.write(`${arr[i][j][k]} `);
//     }
//     console.log();
//   }
//   console.log();
// }

/* sum of diagonals of array */

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let sum1 = 0;
// let sum2 = 0;
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//   sum1 += arr[i][i]; // primary diagonal
//   sum2 += arr[i][n - i - 1]; // secondary diagonal
// }
// console.log(`Sum of primary diagonal: ${sum1}`);
// console.log(`Sum of secondary diagonal: ${sum2}`);

/* Jagged Array */

let prompt = require("prompt-sync")();
let arr = new Array(4);
for (let i = 0; i < arr.length; i++) {
    let size = Number(prompt(`Enter the size of inner array`));
    arr[i] = new Array(size);
}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt(`Enter the value of arr[${i}][${j}]: `));
    }
}
console.log("The jagged array is: ");
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        process.stdout.write(`${arr[i][j]} `);
    }
    console.log();
}