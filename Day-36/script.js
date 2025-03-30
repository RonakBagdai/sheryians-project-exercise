/*  Q 25. Second max element from array */

/* let arr = [30, 60, 20, 10, 40, 50, 60];
let max = Math.max(arr[0], arr[1]); // 60
let secondMax = Math.min(arr[0], arr[1]); // 30 40 50

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] != max) {
    secondMax = arr[i];
  }
}

console.log("Max element is: ", max);
console.log("Second max element is: ", secondMax); */

/* ----------------------------------------------------------------------------------- */

/* Second min element from array */

/* let arr = [30, 60, 20, 10, 40, 50, 10];
let min = Math.min(arr[0], arr[1]); // 10
let secondMin = Math.max(arr[0], arr[1]); // 30 20 40 50

for (let i = 2; i < arr.length; i++) {
  if (arr[i] < min) {
    secondMin = min;
    min = arr[i];
  } else if (arr[i] < secondMin && arr[i] != min) {
    secondMin = arr[i];
  }
}

console.log("Min element is: ", min);
console.log("Second min element is: ", secondMin); */

/* ----------------------------------------------------------------------------------- */

/* — Q 26. Reverse the array */

/* let arr = [30, 60, 20, 10, 40, 50];
let temp = new Array(arr.length);

let i = 0;
for (let j = arr.length - 1; j >= 0; j--) {
  temp[i] = arr[j];
  i++;
}
console.log(temp); */

/* let arr = [30, 60, 20, 10, 40, 50];
let i = 0,
  j = arr.length - 1;

while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}

console.log(arr); */

/* ----------------------------------------------------------------------------------- */

/* — Q 27. All zeroes to left and all ones to right */

/* let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
let i = 0,
  j = 0;

while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}

console.log(arr); */

/* ----------------------------------------------------------------------------------- */

/* — Q 28. Array left Rotation by 1 */

/* let arr = [10, 20, 30, 40, 50];
let temp = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

arr[arr.length - 1] = temp;
console.log(arr); */

/* ----------------------------------------------------------------------------------- */

/* — Q 29. Array Right Rotation by 1 */

/* let arr = [10, 20, 30, 40, 50];
let temp = arr[arr.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = temp;
console.log(arr); */

/* ----------------------------------------------------------------------------------- */