// Merge Sorted Array

// You are given two integer arrays nums1 and nums2, both sorted in non-decreasing order, along with two integers m and n, where:

// m is the number of valid elements in nums1,
// n is the number of elements in nums2.
// The array nums1 has a total length of (m+n), with the first m elements containing the values to be merged, and the last n elements set to 0 as placeholders.

// Your task is to merge the two arrays such that the final merged array is also sorted in non-decreasing order and stored entirely within nums1.
// You must modify nums1 in-place and do not return anything from the function.

// Example 1:
// Input: nums1 = [10,20,20,40,0,0], m = 4, nums2 = [1,2], n = 2
// Output: [1,2,10,20,20,40]

// Example 2:
// Input: nums1 = [0,0], m = 0, nums2 = [1,2], n = 2
// Output: [1,2]

// Constraints:
// 0 <= m, n <= 200
// 1 <= (m + n) <= 200
// nums1.length == (m + n)
// nums2.length == n
// -1,000,000,000 <= nums1[i], nums2[i] <= 1,000,000,000

// function merge(nums1, m, nums2, n) {
// 	const target_valid = nums1.length;
// 	let current_valid = m;

// 	let n1_start = 0;
// 	let n1_end = m;

// 	let n2_start = 0;

// 	while (current_valid < target_valid) {
// 		if (nums1[n1_start] > nums2[n2_start]) {
// 			for (let i = n1_end; i > n1_start; i--) {
// 				nums1[i] = nums1[i - 1];
// 			}

// 			nums1[n1_start] = nums2[n2_start];

// 			n1_start++;
// 			n2_start++;
// 			n1_end++;

// 			current_valid++;
// 		} else {
// 		}
// 	}

// 	return nums1;
// }

function merge(nums1, m, nums2, n) {
	for (let num of nums2) {
		nums1.push(num);
	}
	nums1.sort();
	return nums1;
}
