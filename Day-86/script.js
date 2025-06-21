/* Q 101. 852. Peak Index in a Mountain Array/Find maximum element in bitonic 
array */

/* let peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else right = mid;
  }
  return left;
};

let arr = [0, 10, 5, 2];
console.log(peakIndexInMountainArray(arr)); */

/* Q 102. 33. Search in Rotated Sorted Array */

/* let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(search(nums, target));
 */

/* Q 103. Book allocation problem B.Q.
  Problem  Minimize the maximum number of pages read by a student
  Restrictions
  Every student must read at least one book
  Two students can not read a same book
  Allot books in continous manner
  https://www.geeksforgeeks.org/allocate-minimum-number-pages/
  Idenification  K adjacent */

/* let isValid = function (arr, k, upperLimit) {
  let students = 1;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + currentSum > upperLimit) {
      students++;
      currentSum = arr[i]; // Start new student with current book
      if (students > k) return false; // More students than allowed
    } else currentSum += arr[i];
  }
  return true;
};

let findPages = function (arr, k) {
  if (k > arr.length) return -1;
  let first = 0;
  let last = 0;
  let ans = -1;
  for (let i = 0; i < arr.length; i++) {
    last += arr[i];
    first = Math.max(arr[i], first); // Maximum single book
  }
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (isValid(arr, k, mid)) {
      ans = mid;
      last = mid - 1; // Try to find a smaller maximum
    } else {
      first = mid + 1; // Increase the maximum
    }
  }
  return ans;
}; */

// let arr = [12, 34, 67, 90];
// let k = 2;
// console.log(findPages(arr, k));

let isValid = function (arr, k, upperLimit) {
  let students = 1;
  let currentSum = 0;
  console.log(`  Checking if valid for max = ${upperLimit}`);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + currentSum > upperLimit) {
      students++;
      console.log(
        `    -> Book ${arr[i]} can't fit, assigning to Student ${students}`
      );
      currentSum = arr[i];
      if (students > k) {
        console.log(`    ❌ Too many students (${students}), not valid`);
        return false;
      }
    } else {
      currentSum += arr[i];
      console.log(
        `    -> Adding book ${arr[i]} to current student (total: ${currentSum})`
      );
    }
  }
  console.log(`    ✅ Valid with ${students} students`);
  return true;
};

let findPages = function (arr, k) {
  if (k > arr.length) return -1;
  let first = 0;
  let last = 0;
  let ans = -1;

  for (let i = 0; i < arr.length; i++) {
    last += arr[i];
    first = Math.max(first, arr[i]);
  }

  console.log(`Initial range: [${first}, ${last}]`);

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    console.log(`\n🔍 Trying mid = ${first} + ${last} = ${mid} `);

    if (isValid(arr, k, mid)) {
      ans = mid;
      console.log(
        `✅ mid = ${mid} is valid. Updating answer and trying smaller max.`
      );
      last = mid - 1;
      console.log(`    -> New range: [${first}, ${last}]`);
    } else {
      console.log(`❌ mid = ${mid} is not valid. Trying larger max.`);
      first = mid + 1;
      console.log(`    -> New range: [${first}, ${last}]`);
    }
    if (first > last) {
      console.log(`\n❗ First (${first}) is now greater than Last (${last}).`);
      console.log(`Exiting loop.`);
    }
  }

  console.log(`\n🎯 Minimum pages = ${ans}`);
  return ans;
};

// Test case
let arr = [12, 34, 67, 90];
let k = 2;
console.log("\nFinal Output:", findPages(arr, k));

/* Q 104. 1011. Capacity To Ship Packages Within D Days */

let canShip = function (weights, capacity, days) {
  let currentWeight = 0;
  let requiredDays = 1; // Start with one day
  for (let weight of weights) {
    if (currentWeight + weight > capacity) {
      requiredDays++;
      currentWeight = weight; // Start new day with current weight
      if (requiredDays > days) return false; // More days than allowed
    } else {
      currentWeight += weight;
    }
  }
  return true;
};

let shipWithinDays = function (weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canShip(weights, mid, days)) {
      ans = mid; // Found a valid capacity
      right = mid - 1; // Try for a smaller capacity
    } else {
      left = mid + 1; // Increase the capacity
    }
  }
  return ans;
};

let weights = [10, 50, 100, 100, 50, 100, 100, 100];
let days = 5;
console.log(shipWithinDays(weights, days));
