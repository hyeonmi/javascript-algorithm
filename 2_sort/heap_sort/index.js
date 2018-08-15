function swap(arr, a, b){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function heapSort(arr){
    const heap = buildMaxHeap(arr);

    let endIndex = heap.length - 1;
    for(let i = 0; i <= endIndex; i++){
        swap(heap, i, endIndex);
        maxHeapify(heap, i);
        endIndex--;
    }
}

function buildMaxHeap(arr){
    const start = parseInt(arr.length/2, 10);
    for(let i = start; i > -1; i--){
        maxHeapify(arr, i);
    }
    return arr;
}

function maxHeapify(arr, index){
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if(arr[left] > arr[index]){
        swap(arr, index, left);
    }

    if(arr[right] > arr[index]){
        swap(arr, index, right);
    }
}

