class Node{
    constructor(data){
        this.data = data;
        this.prev = null;        
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    pop(){
        if(this.top){
            const data = this.top.data;
            this.top = this.top.prev;
            return data;
        }
        return null;
    }

    push(data){
        const node = new Node(data);
        node.prev = this.top;
        this.top = node;
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }

        return this.top.data;
    }

    isEmpty() {
        return this.top === null;
    }

}

module.exports = Stack;