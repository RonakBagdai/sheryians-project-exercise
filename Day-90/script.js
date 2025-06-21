/* Q 106. 349. Intersection of Two Arrays */

// let intersection = function (nums1, nums2) {
//   let set1 = new Set(nums1);
//   let result = [];

//   for (let i = 0; i < nums2.length; i++) {
//     if (set1.has(nums2[i]) && !result.includes(nums2[i])) {
//       result.push(nums2[i]);
//     }
//   }

//   return result;
// };

//2nd approach

/* let intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];

  for (let num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
};

let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2)); */

/* 350. Intersection of Two Arrays II */

/* let intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let result = [];

  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}; */

/* let intersect = function (nums1, nums2) {
  let map = new Map();
  let result = [];
  for (let num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(intersect(nums1, nums2)); */

/* Q 107. 560. Subarray Sum Equals K  BQ  3,9,2,4,1,7,2,6,5,8,3,7,6,2,1 k = 5 */

/* let subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return count;
};

let nums = [1, 2, 3, 4, 5];
let k = 5;
console.log(subarraySum(nums, k)); // Output: 2 (subarrays: [2, 3] and [5])
 */

/* Q 108. Longest Sub-Array with Sum K */

let longestSubarrayWithSumK = function (nums, k) {
  let maxLength = 0;
  let sum = 0;
  let map = new Map();
  map.set(sum, -1); // Handle case where subarray starts from index 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      maxLength = Math.max(maxLength, i - map.get(sum - k));
    }
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return maxLength;
};

let nums = [10, 5, 2, 7, 1, -10];
let k = 15;
console.log(longestSubarrayWithSumK(nums, k));
