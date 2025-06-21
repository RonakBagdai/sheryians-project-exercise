/* ----- Sorting Algorithm ----- */

/* Merge Sort */

/* function conquer(arr, start, mid, end) {
  // conquer(arr, 0, 0, 1);
  console.log(`Conquering [${start}-${mid}] and [${mid + 1}-${end}]`);
  let temp = new Array(end - start + 1).fill(0);
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  while (i <= mid) {
    temp[k++] = arr[i++];
  }>
  while (j <= end) {
    temp[k++] = arr[j++];
  }

  i = start;
  k = 0;
  while (k < temp.length) {
    arr[i++] = temp[k++];
  }

  console.log(`Merged [${start}-${end}]:`, arr.slice(start, end + 1));
}

function divide(arr, start, end) {
  // divide(arr, 0, 9);
  // divide(arr, 0, 4);
  // divide(arr, 0, 2);
  // divide(arr, 0, 1);
  if (start >= end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  // mid = Math.floor((0 + 9) / 2) => 4
  // mid = Math.floor((0 + 4) / 2) => 2
  // mid = Math.floor((0 + 2) / 2) => 1
  // mid = Math.floor((0 + 1) / 2) => 0
  divide(arr, start, mid);
  // divide(arr, 0, 4);
  // divide(arr, 0, 2);
  // divide(arr, 0, 1);
  // divide(arr, 0, 0);
  divide(arr, mid + 1, end);
  // divide(arr, 5, 9);
  // divide(arr, 3, 4);
  // divide(arr, 2, 2);
  // divide(arr, 1, 1);
  conquer(arr, start, mid, end);
  // conquer(arr, 0,0,1);
}

let arr = [5, 2, 9, 1, 5, 6, 3, 8, 7, 4];
divide(arr, 0, arr.length - 1);
// divide(arr, 0, 9);
console.log(arr);
 */

/* Quick Sort */

/* let arr = [18, 12, 24, 9, 5, 15, 30, 21, 27, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

function quickSort(arr, start, end) {
  if (start < end) {
    let pivotIndex = findPivotIndex(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
}

function findPivotIndex(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
} */

/* Cyclic Sort */

function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let correctIndex = arr[i] - 1;
    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }
}

let arr = [2, 6, 3, 1, 5, 4, 8, 7];
cyclicSort(arr);
console.log(arr);
