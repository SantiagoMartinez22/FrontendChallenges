class StackNode<T> {
    data: T;
    next: StackNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Stack<T> {
    head: StackNode<T> | null;
    tail: StackNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public push(data: T): void {
        const stackNode: StackNode<T> = new StackNode(data);
        if (this.tail) {
            this.tail.next = stackNode;
            this.tail = stackNode;
        } else {
            this.head = stackNode;
            this.tail = stackNode;
        }
        this.size++;
    }

    public pop(): T | null {
        if (!this.head) {
            return null;
        }

        const data: T = this.tail!.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let node: StackNode<T> | null = this.head;
            while (node.next !== this.tail) {
                node = node.next!;
            }

            node.next = null;
            this.tail = node;
        }

        this.size--;
        return data;
    }
}



    const numberStack = new Stack<number>();
    console.log("Test con elementos tipo number");
    
    numberStack.push(1);
    numberStack.push(2);
    numberStack.push(3);
    numberStack.push(4);
    console.log(numberStack.pop()); 
    console.log(numberStack.pop()); 
    console.log(numberStack.pop()); 
    console.log(numberStack.pop()); 

    
    const stringStack = new Stack<string>();
    console.log("Test con elementos String");
    
    stringStack.push('a');
    stringStack.push('b');
    stringStack.push('c');
    console.log(stringStack.pop()); 
    console.log(stringStack.pop()); 
    console.log(stringStack.pop()); 
    console.log(stringStack.pop()); 




