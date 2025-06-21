/*  Q 90. Sort the Color */

/* let sortColors = function (nums) {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;
  while (i <= k) {
    if (nums[i] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else if (nums[i] === 2) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k--;
    } else {
      i++;
    }
  }
};

let nums = [2, 2, 1, 1, 0, 0, 2, 0, 1];
sortColors(nums);
console.log(nums);
*/

/* Q 91. 42. Trapping Rain Water */

/* let trap = function (height) {
  let leftarr = new Array(height.length).fill(0);
  let rightarr = new Array(height.length).fill(0);
  let water = 0;
  leftarr[0] = height[0];
  rightarr[height.length - 1] = height[height.length - 1];
  let maxleft = height[0];
  let maxright = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    maxleft = Math.max(maxleft, height[i]);
    leftarr[i] = maxleft;
  }
  for (let i = height.length - 2; i >= 0; i--) {
    maxright = Math.max(maxright, height[i]);
    rightarr[i] = maxright;
  }
  for (let i = 0; i < height.length; i++) {
    water += Math.min(leftarr[i], rightarr[i]) - height[i];
  }
  return water;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let result = trap(height);
console.log(result); */

/* Q 92. 11. Container With Most Water */

/* let maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;

  while (i < j) {
    let width = j - i;
    let minHeight = Math.min(height[i], height[j]);
    maxArea = Math.max(maxArea, width * minHeight);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let result = maxArea(height);
console.log(result); */

/* Q 93. 15. 3Sum */

let threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
let result = threeSum(nums);
console.log(result);
