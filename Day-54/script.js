/* 
    Q 67.Two Sum
*/

// let twoSum = function (nums, target) {
//   let map = new Map();
//   let ans = [-1, -1];

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.has(complement)) {
//       ans[0] = i;
//       ans[1] = map.get(complement);
//       return ans;
//     } else map.set(nums[i], i);
//   }
//   return ans;
// };

// let nums = [2, 7, 11, 15];
// let target = 9;
// let result = twoSum(nums, target);
// console.log(result); // Output: [0, 1]

// let twoSum = function (nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];

//     if (map.has(complement)) {
//       return [i, map.get(complement)];
//     }

//     map.set(nums[i], i);
//   }

//   return [];
// };

// Example usage:
// let nums = [2, 7, 11, 15];
// let target = 9;
// let result = twoSum(nums, target);
// console.log(result); // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)

/* -----------------------------❌----------------------------- */

/* 
    Q 68.First letter appears twice
*/

// let repeatedCharacter = (s) => {
//   let map = new Map();

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (map.has(char)) {
//         return char;
//     } else {
//       map.set(char, 1);
//     }
//   }
// };

// let s = "abccbaacz";
// let result = repeatedCharacter(s);
// console.log(result); // Output: "c" (the first letter to appear twice)

/* -----------------------------❌----------------------------- */

/*
    Q 69.Sort the people
*/

let sortPeople = (names, heights) => {
  let map = new Map();

  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  let sortedNames = [];
  for (let i = 0; i < heights.length; i++) {
    sortedNames.push(map.get(heights[i]));
  }
  return sortedNames;
};

let names = ["Mary", "John", "John"];
let heights = [180, 185, 170];
let result = sortPeople(names, heights);
console.log(result); // Output: ["Mary", "Emma", "John"] (sorted by heights in descending order)

