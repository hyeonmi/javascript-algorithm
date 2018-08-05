class Node {
    constructor(data){
        this.data = data;
        this.next = null;    
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(data){
        const node = new Node(data);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue(){
        if(this.head){
            const header = this.head;
            this.head = header.next;
            return header.data;
        }
        return null;
    }

    peek(){
        return this.head;
    }
}

module.exports = Queue;