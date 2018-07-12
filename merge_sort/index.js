function mergeSort(arr, left, right){
    var middle = parseInt((left + right) / 2, 10);

    mergeSort(arr.slice(left, middle));
    mergeSort(arr.slice(mid + 1, right));
}

function compareSort(arr, left, right){

    var temp = [];
    while(left <= right){
        if(arr[left] < arr[right]){
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }    
    }
}
var arr = [1,10,5,9,11,30,1,6,8];
mergeSort(arr, 0, arr.length);