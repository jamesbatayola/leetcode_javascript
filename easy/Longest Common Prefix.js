function longestCommonPrefix(strs) {
	if (strs.length < 1 || strs.length > 200) return -1;

	// const min = Math.min(...strs.map((e) => e.length));

	let res = "";

	const first = strs[0];

	for (let i = 0; i < min; i++) {
		for (let s of strs) {
		}

		res += strs[0];
	}

	return res;
}

console.log(longestCommonPrefix(["bat", "bag", "bank", "band"]));
console.log(longestCommonPrefix(["dance", "dag", "danger", "damage"]));
console.log(longestCommonPrefix(["neet", "feet"]));
