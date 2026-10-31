import Node from "./node"

export default class LinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value) {
        const newTail = new Node(value);
        const curTail = this.tail;

        this.tail = newTail;

        if (curTail) {
            curTail.nextNode = newTail;
        } else {
            this.head = newTail;
        }

        this.size++;
    }

    prepend(value) {
        const newHead = new Node(value);
        const curHead = this.head;

        this.head = newHead;

        if (curHead) {
            newHead.nextNode = curHead;
        } else {
            this.tail = newHead;
        }

        this.size++;
    }

    size() {
        return this.size
    }

    head() {
        if (this.head) {
            return this.head
        } else return undefined
    }

    tail() {
        if (this.tail) {
            return this.tail
        } else return undefined
    }

    at(index) {
        if (index < 0 || index >= this.size) return undefined;

        let node = this.head;

        for (let i = 0; i < index; i++) {
            node = node.nextNode;
        }

        return node;
    }

    pop() {
        if (!this.head) return undefined;

        if (this.size === 1) {
            const removedNode = this.tail;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return removedNode;
        }

        let node = this.head;

        while (node.nextNode !== this.tail) {
            node = node.nextNode;
        }

        const removedNode = this.tail;
        node.nextNode = null;
        this.tail = node;
        this.size--;

        return removedNode;
    }

    contains(value) {
        let node = this.head;

        while (node) {
            if (node.value === value) return true;
            node = node.nextNode;
        }

        return false;
    }

    findIndex(value) {
        let node = this.head
        let i = 0
        while (node) {
            if (node.value === value) return i;
            node = node.nextNode
            i++
        }
        return -1
    }

    toString() {
        let node = this.head;
        let str = "";

        if (!node) return "";

        while (node) {
            str += `${node.value} -> `;
            node = node.nextNode;
        }

        return str + "null";
    }

    insertAt(index, ...values) {
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of bounds");
        }

        if (values.length === 0) return;

        if (index === 0) {
            values.reverse().forEach(value => this.prepend(value));
            return;
        }

        if (index === this.size) {
            values.forEach(value => this.append(value));
            return;
        }

        let prevNode = this.head;

        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.nextNode;
        }

        const nextNode = prevNode.nextNode;
        let firstNode = new Node(values[0]);
        let lastNode = firstNode;

        for (let i = 1; i < values.length; i++) {
            const curNode = new Node(values[i]);
            lastNode.nextNode = curNode;
            lastNode = curNode;
        }

        prevNode.nextNode = firstNode;
        lastNode.nextNode = nextNode;

        this.size += values.length;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError("Index out of bounds");
        }

        if (index === 0) {
            const removedNode = this.head;
            this.head = this.head.nextNode;
            this.size--;

            if (this.size === 0) {
                this.tail = null;
            }

            return removedNode;
        }

        let prevNode = this.head;

        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.nextNode;
        }

        const removedNode = prevNode.nextNode;
        prevNode.nextNode = removedNode.nextNode;

        if (index === this.size - 1) {
            this.tail = prevNode;
        }

        this.size--;

        return removedNode;
    }
}

