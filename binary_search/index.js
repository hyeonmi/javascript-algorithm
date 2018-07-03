function binarySearchIterative(list, x){
    var left = 0;
    var right = list.length - 1;
    
    while(left <= right){
        var mid = parseInt(left + ((right - left)/2));

        if(list[mid] === x){
            return true;
        } else if(x < list[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}