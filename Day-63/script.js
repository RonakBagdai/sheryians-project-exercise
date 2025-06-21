/* Q 83. 88. Merge Sorted Array */

// let arr1 = [2, 4, 5];
// let arr2 = [1, 3, 6, 7];

// let ans = new Array(arr1.length + arr2.length);
// let i = 0,
//   j = 0,
//   k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     ans[k] = arr1[i];
//     i++;
//   } else {
//     ans[k] = arr2[j];
//     j++;
//   }
//   k++;
// }

// while (i < arr1.length) {
//   ans[k] = arr1[i];
//   i++;
//   k++;
// }
// while (j < arr2.length) {
//   ans[k] = arr2[j];
//   j++;
//   k++;
// }
// console.log(ans);

// let merge = function (nums1, m, nums2, n) {
//   let i = m - 1,
//     j = n - 1,
//     k = m + n - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//   }
//   return nums1;
// };
// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;
// console.log(merge(nums1, m, nums2, n));

/* Q 84. 26. Remove Duplicates from Sorted Array */

// let removeDuplicates = function (nums) {
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//         i++;
//         nums[i] = nums[j];
//         }
//     }
//     return i + 1;
// };

// let nums = [0, 0, 1, 1, 2, 2, 3, 4];
// console.log(removeDuplicates(nums));

/* Q 85. 1089. Duplicate Zeros */

let duplicateZeros = function (arr) {
  let zeros = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      zeros++;
    }
  }

  let i = n - 1;
    let j = n + zeros - 1;
    
    while (i !== j) {
        if (arr[i] !== 0) {
            if (j < n) {
                arr[j] = arr[i];
            }
            j--;
        } else {
            if (j < n) {
                arr[j] = 0;
            }
            j--;
            if (j < n) {
                arr[j] = 0;
            }
            j--;
        }
        i--;
    }
  return arr;
};

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
console.log(duplicateZeros(arr));