function swap(array, left, right){
    var leftData = array[left];
    array[left] = array[right];
    array[right] = leftData;
}

function partition(list, left, right, pivot){
    while(left < right){
        while(list[left] < pivot){
            left++;
        }

        while(list[right] > pivot){
            right--;
        }

        if(left <= right){
            swap(list, left, right);
            left++;
            right--;
        }
    }

    return left;
}

function quickSort(list, left, right){
    if(left >= right){
        return;
    }

    var pivot = list[parseInt((left+right)/2, 10)];
    var index = partition(list, left, right, pivot);
    quickSort(list, left, index-1);
    quickSort(list, index, right);
    return list;
}