// 1046. Last Stone Weight

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:
// Input: stones = [1]
// Output: 1

// Constraints:
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
	if (stones.length === 1) return stones[0];

	stones.push(stones[0]);
	stones[0] = 0;

	// o(N) :)
	// Build the heap
	for (let i = Math.floor(stones.length / 2); i > 0; i--) {
		let j = i;
		while (stones[j] < stones[j * 2] || stones[j] < stones[j * 2 + 1]) {
			let max;

			// Complete sibling
			if (stones[j * 2] && stones[j * 2 + 1]) {
				max = stones[j * 2] > stones[j * 2 + 1] ? j * 2 : j * 2 + 1;
			}

			// No right siblng
			else if (!stones[j * 2 + 1]) {
				max = j * 2;
			}

			[stones[j], stones[max]] = [stones[max], stones[j]];
			j = max;
		}
	}

	//! Recursive Helper
	function traverse_sort(i) {
		// Base Case
		if (!stones[i * 2] && !stones[i * 2 + 1]) return;

		let max_index;

		// complete siblnig
		if (stones[i * 2] && stones[i * 2 + 1]) {
			max_index = stones[i * 2] < stones[i * 2 + 1] ? i * 2 + 1 : i * 2;

			// no right sibling
		} else if (!stones[i * 2 + 1]) {
			max_index = i * 2;
		}

		// swap
		[stones[i], stones[max_index]] = [stones[max_index], stones[i]];

		traverse_sort(max_index);
	}

	// Percolating down
	let i = 1;
	while (stones.length > 2) {
		const max_index = stones[i * 2] < stones[i * 2 + 1] ? i * 2 + 1 : i * 2;

		const smashed = Math.abs(stones[i] - stones[max_index]);

		// both stones destoyed
		if (smashed === 0) {
			stones[i] = stones.at(-1);
			stones[max_index] = stones.at(-2);

			traverse_sort(max_index);
			traverse_sort(i);

			stones.pop();
			stones.pop();
		} else {
			stones[max_index] = smashed;
			stones[i] = stones.at(-1);

			traverse_sort(max_index);
			traverse_sort(i);

			stones.pop();
		}
	}

	return stones[1];
}

const stones = [2, 7, 4, 1, 8, 1];

console.log(lastStoneWeight(stones));
