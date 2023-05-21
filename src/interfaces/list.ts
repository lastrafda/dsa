export default interface List<T> {
    size(): number;
    isEmpty(): boolean;
    contains(element: T): boolean;
    indexOf(element: T): number;
    lastIndexOf(element: T): number;
    get(index: number): T;
    set(index: number, element: T): T;
    add(element: T): void;
    add(element: T, index: number): void;
    remove(index: number): T;
    removeElement(element: T): boolean;
    clear(): void;
    toArray(): T[];
}
