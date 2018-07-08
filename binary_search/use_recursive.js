function binarySearchRecursive(list, x, left, right){
    while(left <= right){
        var mid = parseInt(left + ((right - left)/2));

        if(list[mid] === x){
            return true;
        } else if(x < list[mid]){
            right = mid - 1;
            return binarySearchRecursive(list, x, left, right);
        } else {
            left = mid + 1;
            return binarySearchRecursive(list, x, left, right);
        }
    }
    return false;
}

module.exports = binarySearchRecursive;