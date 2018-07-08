function MinInHeap() {
    var heaps = [];

    return {
        getLeftChildIndex(parentIndex) {
            return 2 * parentIndex + 1;
        },

        getRightChildIndex(parentIndex){
            return 2 * parentIndex + 2;
        },

        getParentIndex(childIndex) {
            return parseInt((childIndex - 1)/2, 10);
        },

        hasLeftChild(index){
            return this.getLeftChildIndex(index) < heaps.length;
        },

        hasRightChild(index){
            return this.getRightChildIndex(index) < heaps.length;
        },

        hasParent(index){
            return this.getParentIndex(index) >= 0;
        },

        leftChild(index){
            return heaps[this.getLeftChildIndex(index)];
        },

        rightChild(index){
            return heaps[this.getRightChildIndex(index)];
        },

        parent(index){
            return heaps[this.getParentIndex(index)];
        },

        swap(indexOne, indexTwo){
            var temp = heaps[indexOne];
            heaps[indexOne] = heaps[indexTwo];
            heaps[indexTwo] = temp;
        },

        peek(){
            if(heaps.length === 0){
                return null;
            }

            return heaps[0];
        },

        poll(){
            if(heaps.length === 0){
                return null;
            }

            if(heaps.length === 1){
                return heaps.pop();
            }

            const item = heaps[0];
            heaps[0] = heaps.pop();
            this.heapifyDown();
            return item;
        },

        add(item){
            heaps.push(item);
            this.heapifyUp();
            return this;

        },

        find(item){
            var foundheaps = [];

            for(var i = 0; i < heaps.length; i++){
                var foundItem = heaps[i];
                if(foundItem === item){
                    foundItemIndices.push(foundItem);
                }
            }

            return foundItems;
        },

        heapifyDown(startIndex){
            var currentIndex = startIndex || 0;
            var nextIndex = null;

            while(this.hasLeftChild(currentIndex)){
                if(this.hasRightChild(currentIndex) && (this.rightChild(currentIndex) < this.leftChild(currentIndex))){
                    nextIndex = this.getRightChildIndex(currentIndex);
                } else {
                    nextIndex = this.getLeftChildIndex(currentIndex);
                }

                if(this.heaps[currentIndex] < this.heaps[nextIndex]){
                    break;
                }

                this.swap(currentIndex, nextIndex);
                currentIndex = nextIndex;
            }
        },

        heapifyUp(startIndex){
            var currentIndex = startIndex || heaps.length - 1;
            
            while(this.hasParent(currentIndex) && (heaps[currentIndex] < this.parent(currentIndex))){
                var parentIndex = this.getParentIndex(currentIndex);
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
        },

        toString() {
            return heaps.toString();
        }

    }
}