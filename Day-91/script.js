/* Q 109. 525. Contiguous Array */

/* let findMaxLength = function (nums) {
  let sum = 0;
  let maxLength = 0;
  let map = new Map();
  let k = 0;
  map.set(sum, -1);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = -1;
    }
  }

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

let nums = [0, 1, 0, 1, 0, 1];
console.log(findMaxLength(nums)); */

/* Q 110. 128. Longest Consecutive Sequence */

/* let longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  let longestStreak = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue; // Skip duplicates
    }
    if (nums[i] === nums[i - 1] + 1) {
      count++;
    } else {
      longestStreak = Math.max(longestStreak, count);
      count = 1; // Reset count for new sequence
    }
  }
  return Math.max(longestStreak, count); // Handle case for last sequence
}; */

/* let longestConsecutive = function (nums) {
  let longestStreak = 0;
  let numSet = new Set(nums);

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let count = 1;

      while (numSet.has(num + count)) {
        count++;
      }
      longestStreak = Math.max(longestStreak, count);
    }
  }
  return longestStreak;
};

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
 */

/* Q 111. Count distinct elements in every window */

