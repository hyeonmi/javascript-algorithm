function binarySearchRecursive(list, x, left, right){
    if(left > right){
        return -1;
    }
    
    var mid = parseInt((right + left)/2, 10);

    if(list[mid] === x){
        return mid;
    } else if(x < list[mid]){
        right = mid - 1;
        return binarySearchRecursive(list, x, left, right);
    } else {
        left = mid + 1;
        return binarySearchRecursive(list, x, left, right);
    }
}

module.exports = binarySearchRecursive;