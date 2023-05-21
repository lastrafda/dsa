class ListNode<T> {
    element: T;
    next: ListNode<T> | null;

    constructor(element: T) {
        this.element = element;
        this.next = null;
    }
}

export default class LinkedList<T> {
    private head: ListNode<T> | null;
    private _size: number;

    constructor() {
        this.head = null;
        this._size = 0;
    }

    size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this._size === 0;
    }

    add(element: T): void {
        const newNode = new ListNode(element);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this._size++;
    }

    remove(element: T): boolean {
        if (this.head === null) {
            return false;
        }

        if (this.head.element === element) {
            this.head = this.head.next;
            this._size--;
            return true;
        }

        let current: ListNode<T> | null = this.head;
        let prev: ListNode<T> | null = null;

        while (current !== null) {
            if (current.element === element) {
                if (prev !== null) {
                    prev.next = current.next;

                }
                this._size--;
                return true;
            }

            prev = current;
            current = current.next;
        }

        return false;
    }

    toArray(): T[] {
        const array: T[] = [];
        let current = this.head;
        while (current !== null) {
            array.push(current.element);
            current = current.next;
        }
        return array;
    }
}
