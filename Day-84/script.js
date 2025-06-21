/* Q 94. 268 . Missing Number */

/* let missingNumber = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correctIndex = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[correctIndex]) {
      let temp = nums[i];
      nums[i] = nums[correctIndex];
      nums[correctIndex] = temp;
    } else {
      i++;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) {
      return j;
    }
  }
  return nums.length;
};

let nums = [3, 0, 1];
console.log(missingNumber(nums)); */

/* Q 95. 448 . Find all the numbers dissappeared in an array */

/* let findDisappearedNumbers = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correctIndex = nums[i] - 1;
    if (nums[i] !== nums[correctIndex]) {
      let temp = nums[i];
      nums[i] = nums[correctIndex];
      nums[correctIndex] = temp;
    } else {
      i++;
    }
  }
  let result = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == j + 1) {
      continue;
    }
    result.push(j + 1);
  }
  return result;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums)); */

/* Q 96. 41 . First Missing Positive */

/* let firstMissingPositive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correctIndex = nums[i] - 1;
    if (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== nums[correctIndex]
    ) {
      let temp = nums[i];
      nums[i] = nums[correctIndex];
      nums[correctIndex] = temp;
    } else {
      i++;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      return j + 1;
    }
  }
  return nums.length + 1;
};

let nums = [1, 2, 0];
console.log(firstMissingPositive(nums)); */

/* Q 97. 704. Binary Search */

/* let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
console.log(search(nums, target)); */

/* Q 98. 35. Search Insert Position */

/* let searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

let nums = [1, 3, 5, 6];
let target = 7;
console.log(searchInsert(nums, target)); */

/* Q 99. 34. Find First and Last Position of Element in Sorted Array */

/* let binarySearch = function (nums, target, findFirst) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result = mid;
      if (findFirst) {
        right = mid - 1; // Search in the left half
      } else {
        left = mid + 1; // Search in the right half
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};

let searchRange = function (nums, target) {
  let first = binarySearch(nums, target, true);
  let last = binarySearch(nums, target, false);
  return [first, last];
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target)); // Output: [3, 4] */

/* Q 100. Count of element in the sorted array */

let binarySearch = function (nums, target, findFirst) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result = mid;
      if (findFirst) {
        right = mid - 1; // Search in the left half
      } else {
        left = mid + 1; // Search in the right half
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};

let countOccurrences = function (nums, target) {
  let first = binarySearch(nums, target, true);
  if (first === -1) return 0;
  let last = binarySearch(nums, target, false);
  return last - first + 1;
};

let nums = [1, 2, 2, 2, 3, 4, 5];
let target = 2;
console.log(countOccurrences(nums, target)); // Output: 3
