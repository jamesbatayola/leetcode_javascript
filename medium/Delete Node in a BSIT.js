// 450. Delete Node in a BST

// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:
// 1) Search for a node to remove.
// 2) If the node is found, delete the node.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], key = 3

//         5
//        / \
//       3   6
//      / \   \
//     2   4   7

// Output: [5,4,6,2,null,null,7]

//         5
//        / \
//       4   6
//      /     \
//     2       7

// Example 2:
// Input: root = [5,3,6,2,4,null,7], key = 0

//         5
//        / \
//       3   6
//      / \   \
//     2   4   7

// Output: [5,3,6,2,4,null,7]

//         5
//        / \
//       3   6
//      / \   \
//     2   4   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

function deleteNode(root, key) {
	if (!root) return null;

	if (root.val < key) {
		root.right = deleteNode(root.right, key);
	} else if (root.val > key) {
		root.left = deleteNode(root.left, key);
	} else {
		if (!root.left) return root.right;
		if (!root.right) return root.left;

		const successor = min(root.right);
		root.val = successor.val;
		root.right = deleteNode(root.right, successor.val);
	}

	return root;
}

function min(root) {
	if (!root || !root.left) return root;
	return min(root.left);
}
