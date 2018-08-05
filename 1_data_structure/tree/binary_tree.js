class Node {
	constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
	constructor(){
		this.root = null;
    }

    add(data){
        if(this.root === null){
            this.root = new Node(data);
        } else {
            this._addNode(this.root, data);	
        }
    }

    _addNode(node, data){
        if(node.data < data){
            if(node.right === null){
                node.right = new Node(data);
            } else {
                this._addNode(node.right, data);
            }
        } else {
            if(node.left === null){
                node.left = new Node(data);
            } else {
                this._addNode(node.left, data);
            }
        }
    }

    find(data){
        this._find(this.root, data);
    }

    _find(node, data){
        if(node.data === data){
            return node;
        }

        if(node.data < data){
            return this._find(this.right, data);
        }else {
            return this._find(this.left, data);
        }
    }

    printPreOder(node = this.root){
        if(node === null){
            return;
        }

        console.log(node.data);

        this.printPreOder(node.left);
        this.printPreOder(node.right);

    }


    printInOrder(node = this.root){
        if(node === null){
            return;
        }

        this.printInOrder(node.left);
        console.log(node.data);
        this.printInOrder(node.right);    
    }

    printPostOrder(node = this.root){
        if(node ===  null){
            return;
        }

        this.printPostOrder(node.left);
        this.printPostOrder(node.right);
        console.log(node.data);    
    }


    remove(data){
        this._removeData(this.root, data);
    }

    _removeData(node, data){
        if (node === null) {
          return null;
        }
        if (data == node.data) {
          if (node.left == null && node.right == null) {
            return null;
          }
          if (node.left == null) {
            return node.right;
          }
          if (node.right == null) {
            return node.left;
          }
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = this._removeData(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = this._removeData(node.left, data);
          return node;
        } else {
          node.right = this._removeData(node.right, data);
          return node;
        }
    }

    levelOrder(){
        const result = [];
        const queue = [];

        if(this.root !== null){
            queue.push(this.root);
            while(queue.length > 0){
                let node = queue.shift();
                result.push(node.data);

                if(node.left){
                    queue.push(node.left);
                }

                if(node.right){
                    queue.push(node.right);
                }
            }
            
        }
        return result;
    }

}


var b = new BinarySearchTree();
b.add(10);
b.add(14);
b.add(9);
b.add(8);
b.add(4);
b.add(15);
b.add(19);