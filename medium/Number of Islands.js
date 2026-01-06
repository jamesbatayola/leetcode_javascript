// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

// ------------------------------------------------------------------------

//! MY BRUTE FORCE SOLUTION :)

// ------------------------------------------------------------------------
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
	let count = 0;

	const land_visited = new Set();
	const water_visited = new Set();

	const ROWS = grid.length - 1;
	const COLS = grid[0].length - 1;

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			if (grid[r][c] === "1") {
				if (land_visited.has(`${r},${c}`)) continue;
				else {
					count++;
					traverse_land(r, c);
				}
			} else if (grid[r][c] === "0") {
				if (water_visited.has(`${r},${c}`)) continue;
				else {
					traverse_water(r, c);
				}
			}
		}
	}

	function traverse_water(r, c) {
		// Out of bounds base case
		if (r < 0 || r > ROWS || c < 0 || c > COLS) {
			return;
		}

		// Shore is reach base case
		if (grid[r][c] === "1") return;

		// Already Visited
		if (water_visited.has(`${r},${c}`)) return;

		water_visited.add(`${r},${c}`);

		traverse_water(r - 1, c); // up
		traverse_water(r, c + 1); // right
		traverse_water(r + 1, c); // down
		traverse_water(r, c - 1); // left
	}

	function traverse_land(r, c) {
		// Out of bounds base case
		if (r < 0 || r > ROWS || c < 0 || c > COLS) {
			return;
		}

		// Water reached base case
		if (grid[r][c] === "0") return;

		// Already Visited
		if (land_visited.has(`${r},${c}`)) return;

		land_visited.add(`${r},${c}`);

		traverse_land(r - 1, c); // up
		traverse_land(r, c + 1); // right
		traverse_land(r + 1, c); // down
		traverse_land(r, c - 1); // left
	}

	return count;
}

const grid1 = [
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"],
];

const grid2 = [
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid1));
console.log(numIslands(grid2));
