
class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
    
    insert(v){
        if(this.value < v){
            if(this.right === null){
                const node = new Node(v);
                this.right = node;
            } else {
                this.right.insert(v);
            }
        } else {
            if(this.left === null){
                const node = new Node(v);
                this.left = node;
            } else {
                this.left.insert(v);
            }
        }
    }

    contains(v){
        if(this.value === v){
            return this;
        } else if(this.right && this.value < v){
            return this.right.contains(v);
        } else if(this.left) {
            return this.left.contains(v);
        }else {
            return null;
        }
    }
    printInOrder(){
        if(this.left !== null){
            this.left.printInOrder();
        }
        console.log(this.value);

        if(this.right !== null){
            this.right.printInOrder();
        }
    }

    printPreOrder(){
        console.log(this.value);

        if(this.left !== null){
            this.left.printPreOrder();
        }

        if(this.right !== null){
            this.right.printPreOrder();
        }

    }

    printPostOrder(){
        console.log(this.value);

        if(this.left !== null){
            this.left.printPostOrder();
        }

        if(this.right !== null){
            this.right.printPostOrder();
        }
    }
}

function BinaryTree(value){
    var root = null;

    return {
        insert: function(value){
            if(root === null){
                root = new Node(value);
            } else {
                root.insert(value);
            }
        },
        contains: function(value){
            if(root === null){
                return;
            }
            
            return root.contains(value);
        },
        remove: function(value){            
            const removeNode = function(node, value) {
                if (node == null) {
                  return null;
                }
                if (value == node.value) {
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
                  node.value = tempNode.value;
                  node.right = removeNode(node.right, tempNode.value);
                  return node;
                } else if (value < node.value) {
                  node.left = removeNode(node.left, value);
                  return node;
                } else {
                  node.right = removeNode(node.right, value);
                  return node;
                }
              }

            root = removeNode(root, value);
        },
        printInOrder: function(){
            root.printInOrder();
        }

    }
}

var b = new BinaryTree();
b.insert(10);
b.insert(14);
b.insert(7);
b.insert(18);
b.insert(3);