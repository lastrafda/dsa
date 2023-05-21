import { List } from "../interfaces";
class LinkedNode<A> {
    data: A;
    next: LinkedNode<A> | null;
    constructor(data: A, next?: LinkedNode<A>) {
        this.data = data
        this.next = next ?? null
    }
    toString = () => {
        return `Node(${this.data})`
    }
}

class ListClientExample<T> implements List<T>{

    private _size: number;
    private _head: LinkedNode<T> | null;
    constructor() {
        this._size = 0;
        this._head = null;
    }
    add(element: T): boolean
    add(element: T, index?: number): boolean;
    add(element: T, index?: number): boolean {
        if (typeof index === 'number') {
            if (index === 0 && this._head !== null) {
                this._head = new LinkedNode(element, this._head as LinkedNode<T>) as LinkedNode<T>;
            } else {
                const prev = this._getNode(index - 1) as LinkedNode<T>;
                prev.next = new LinkedNode(element, prev.next as LinkedNode<T>) as LinkedNode<T>;
            }
            this._size++
            return true
        } else {
            if (this._head === null) {
                this._head = new LinkedNode(element as T)
            } else {
                const node = this._head
                for (let i = 0; i < this._size; i++) {
                    if (node.next === null) {
                        node.next = new LinkedNode(element as T)
                    }
                }
            }
            this._size++;
            return true
        }
    }
    size(): number {
        return this._size;
    }
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    contains(element: T): boolean {
        throw new Error("Method not implemented.");
    }
    indexOf(element: T): number {
        throw new Error("Method not implemented.");
    }
    lastIndexOf(element: T): number {
        throw new Error("Method not implemented.");
    }
    private _getNode(index: number) {
        if (index < 0 || index >= this._size) {
            throw new Error("Index is out of range.");
        }
        let node = this._head;
        for (let i = 0; i < index; i++) {
            node = (node == null ? void 0 : node.next) ?? null;
        }
        return node
    }
    get(index: number): T {
        const node = this._getNode(index);
        return node?.data as T
    }
    set(index: number, element: T): T {
        throw new Error("Method not implemented.");
    }
    remove(index: number): T {
        throw new Error("Method not implemented.");
    }
    removeElement(element: T): boolean {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        this._size = 0;
        this._head = null;
    }
    toArray(): T[] {
        const array = new Array<T>(this._size);
        let node = this._head;
        for (let i = 0; i < this._size; i++) {
            array[i] = node?.data as T;
            node = node?.next ?? null;
        }
        return array
    }
}
try {
    const list = new ListClientExample()
    list.add(1)
    list.add(2)
    list.add(3, 1)
    console.log(list.get(0))
    console.log(list.get(2))
    console.log(list.toArray())
    console.log(list.get(3))
} catch (error) {
    console.error(error.message)
}
