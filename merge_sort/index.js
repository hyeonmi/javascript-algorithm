function mergeSort(arr){
    if(arr.length <=1){
        return arr;
    }

    var left = 0;
    var right = arr.length;
    var middleIndex = parseInt(arr.length / 2, 10);

    var leftArray = mergeSort(arr.slice(left, middleIndex));
    var rightArray = mergeSort(arr.slice(middleIndex, right));

    return mergeSortedArray(leftArray, rightArray);
}

function mergeSortedArray(leftArray, rightArray){
    var sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] < rightArray[0]){
            const v = leftArray.shift();
            sortedArray.push(v);
            
        } else {
            const v = rightArray.shift();
            sortedArray.push(v);
        }
    }

    if(leftArray.length){
        return sortedArray.concat(leftArray);
    }

    if(rightArray.length){
        return sortedArray.concat(rightArray);
    }

    return sortedArray;
}