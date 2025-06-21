/* Q 87. 53. Maximum Subarray / Kadane's Algo */

/* let maxSubArray = (arr) => {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr)); // 6 */

/* Q 88. 169. Majority Element / Boyer Moore's Voting Algo */

/* let majorityElement = (arr) => {
  let count = 0;
  let majorityElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      majorityElement = arr[i];
      count = 1;
    }
  }
  return majorityElement;
};

let arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr)); // 2
 */

/* Q 89. 121. Best Time to Buy and Sell Stock */

let maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    let profit = prices[i] - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 5
