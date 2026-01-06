// Best Time to Buy and Sell Stock

// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Example 1:
// Input: prices = [10,1,5,6,7,1]
// Output: 6
// Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

// Example 2:
// Input: prices = [10,8,7,5,2]
// Output: 0
// Explanation: No profitable transactions can be made, thus the max profit is 0.

// Constraints:
// 1 <= prices.length <= 100
// 0 <= prices[i] <= 100

function maxProfit(prices) {
	let max = [0, 0];
	for (let i = 1; i <= prices.length; i++) {
		if (max[1] <= prices[i]) {
			max[1] = prices[i];
			max[0] = i;
		}
	}

	let min = [0, prices[0]];
	for (let i = max[0] - 1; i >= 0; i--) {
		if (min[1] > prices[i]) {
			min[1] = prices[i];
			min[0] = i;
		}
	}

	const ans = max[1] - min[1];
	return ans < 0 ? 0 : ans;
}

// console.log(maxProfit([10, 1, 5, 6, 7, 1]));
// console.log(maxProfit([10, 8, 7, 5, 2]));
// console.log(maxProfit([2, 4, 1]));

// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));

// TODO ---------------------------- //

function _maxProfit(prices) {
	let buy;
	let sell;

	let i = 0;
	while (true) {
		if (prices[i] < prices[i + 1]) {
			buy = i;

			let j = i + 1;
			while (true) {
				if (prices[j] < prices[j + 1]) {
					j++;
				} else break;
			}
			sell = j;
		}
		if (prices[i] > prices[sell + 1]) {
			i = sell + 1;
		} else {
			i++;
		}
	}
}

_maxProfit([10, 1, 5, 6, 7, 1]);
