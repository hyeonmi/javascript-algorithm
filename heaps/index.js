function MinInHeap() {
    var items = [];

    return {
        getLeftChildIndex(parentIndex) {
            return 2 * parentIndex + 1;
        },

        getRightChildIndex(parentIndex){
            return 2 * parentIndex + 2;
        },

        getParentIndex(childIndex) {
            return (childIndex - 1)/2;
        },

        hasLeftChild(index){
            return this.getLeftChildIndex(index) < items.length;
        },

        hasRightChild(index){
            return this.getRightChildIndex(index) < items.length;
        },

        hasParent(index){
            return this.getParentIndex(index) >= 0;
        },

        leftChild(index){
            return items[this.getLeftChildIndex(index)];
        },

        rightChild(index){
            return items[this.getRightChildIndex(index)];
        },

        parent(index){
            return items[this.getParentIndex(index)];
        },

        swap(indexOne, indexTwo){
            var temp = items[indexOne];
            items[indexOne] = items[indexTwo];
            items[indexTwo] = temp;
        },

        peek(){
            if(items.length === 0){
                return null;
            }

            return items[0];
        },

        poll(){
            if(items.length === 0){
                return null;
            }

            if(items.length === 1){
                return items.pop();
            }

            const item = items[0];
            items[0] = items.pop();
            // this.heapifyDown();
            return item;
        },

        add(item){
            items.push(item);
            this.heapifyUp();
            return this;

        },

        find(item){
            var foundItems = [];

            for(var i = 0; i < items.length; i++){
                var foundItem = items[i];
                if(foundItem === item){
                    foundItemIndices.push(foundItem);
                }
            }

            return foundItems;
        }

    }
}