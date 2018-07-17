function bubbleSort(arr){
    let end = arr.length;
    while(end > -1){
        for(let i = 0; i < end-1; i++){
            const first = arr[i];
            const second = arr[i+1];
            if(first > second){
                arr[i] = second;
                arr[i+1] = first;
            }
        }
        end--;
    }
    return arr;
}