function mergeSort(arr){
    if(arr.length <=1){
        return arr;
    }

    var left = 0;
    var right = arr.length;
    var middleIndex = parseInt(arr.length / 2, 10);

    var leftArray = mergeSort(arr.slice(left, middleIndex));
    var rightArray = mergeSort(arr.slice(middleIndex, right));

    return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray){
    var sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] < rightArray[0]){
            const data = leftArray.shift();
            sortedArray.push(data);
            
        } else {
            const data = rightArray.shift();
            sortedArray.push(data);
        }
    }

    return sortedArray.concat(leftArray).concat(rightArray);
}