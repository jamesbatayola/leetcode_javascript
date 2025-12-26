// MY FAILED SOLUTION 😔

var MyLinkedList = function () {
	this.head = null;
	this.tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
	if (index < 0) return -1;

	let current_index = 0;
	let current_head = this.head;

	while (current_index < index) {
		current_index++;
		current_head = current_head.next;
		if (!current_head) return -1;
	}

	if (!current_head) return -1;

	return current_head.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	const node = {
		val: val,
		prev: null,
		next: this.head,
	};

	if (this.head) {
		this.head.prev = node;
	} else {
		this.tail = node;
	}

	this.head = node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	const node = {
		val: val,
		prev: this.tail,
		next: null,
	};

	if (this.tail) {
		this.tail.next = node;
	} else {
		this.head = node;
	}

	this.tail = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (index < 0) return -1;

	const node = {
		val: val,
		prev: null,
		next: null,
	};

	let current_index = 0;
	let current_head = this.head;

	while (current_index < index) {
		current_index++;
		current_head = current_head.next;
	}

	// First Node
	if (current_index === 0) {
		if (!this.head || !this.tail) {
			this.head = node;
			this.tail = node;

			return;
		}

		current_head.prev = node;
		node.next = current_head;
		this.head = node;

		return;
	}

	// Last Node
	if (current_index === index + 1) {
		if (!this.head || !this.tail) {
			this.head = node;
			this.tail = node;

			return;
		}

		node.prev = this.tail;
		this.tail.next = node;
		this.tail = node;

		return;
	}

	// In-between Nodes
	const previous_head = current_head.prev;

	previous_head.next = node;
	node.prev = previous_head;

	current_head.prev = node;
	node.next = current_head;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index < 0) return -1;

	let current_index = 0;
	let current_head = this.head;

	while (current_index < index) {
		current_index++;
		current_head = current_head.next;
		if (!current_head) throw new Error("Node does not exist");
	}

	// First Node
	if (current_index === 0) {
		if (!this.head || !this.tail) {
			return -1;
		}

		this.head = current_head.next;

		if (!this.head) {
			this.head = null;
			this.tail = null;

			return;
		}

		this.head.prev = null;

		return;
	}

	// Last Node
	if (!current_head.next) {
		current_head.prev.next = null;
		return;
	}

	// In-between Nodes
	const next_head = current_head.next;
	const previous_head = current_head.prev;

	previous_head.next = next_head;
	next_head.prev = previous_head;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// const list = new MyLinkedList();

// list.addAtHead(50); // 4
// list.addAtHead(40); // 3
// list.addAtHead(30); // 2
// list.addAtHead(20); // 1
// list.addAtHead(10); // 0

// list.addAtIndex(4, 45);
// list.addAtIndex(0, 9); // new head
// list.addAtIndex(3, 25);

// list.deleteAtIndex(0);
// list.deleteAtIndex(2);
// list.deleteAtIndex(5);
// list.deleteAtIndex(0);
// list.deleteAtIndex(0);

// TEST1 PASSED //
// list.addAtHead(7);
// list.addAtHead(2);
// list.addAtHead(1);
// list.addAtIndex(3, 0);
// list.deleteAtIndex(2);
// list.addAtHead(6);
// list.addAtTail(4);
// list.get(4);
// list.addAtHead(4);
// list.addAtIndex(5, 0);
// list.addAtHead(6);

// TEST2 //
// list.addAtHead(1);
// list.addAtTail(3);
// list.addAtIndex(1, 2);
// list.get(1);
// list.deleteAtIndex(1);
// list.get(1);

// let current_head = list.head;

// while (current_head) {
// 	console.log(current_head.val);
// 	current_head = current_head.next;
// }

// -------------------------------------------------------------------------------- //

// Loginov Kirill's Solution

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class MyLinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	get(index) {
		if (index < 0 || index >= this.size) return -1;
		let curr = this.head;
		for (let i = 0; i < index; i++) curr = curr.next;
		return curr.val;
	}

	addAtHead(val) {
		const node = new Node(val);
		node.next = this.head;
		this.head = node;
		this.size++;
	}

	addAtTail(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
		} else {
			let curr = this.head;
			while (curr.next) curr = curr.next;
			curr.next = node;
		}
		this.size++;
	}

	addAtIndex(index, val) {
		if (index < 0 || index > this.size) return;
		if (index === 0) return this.addAtHead(val);
		let curr = this.head;
		for (let i = 0; i < index - 1; i++) curr = curr.next;
		const node = new Node(val);
		node.next = curr.next;
		curr.next = node;
		this.size++;
	}

	deleteAtIndex(index) {
		if (index < 0 || index >= this.size) return;
		if (index === 0) {
			this.head = this.head.next;
		} else {
			let curr = this.head;
			for (let i = 0; i < index - 1; i++) curr = curr.next;
			curr.next = curr.next.next;
		}
		this.size--;
	}
}
