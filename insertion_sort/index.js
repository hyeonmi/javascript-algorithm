function insertionSort(list){
    for(let i=1; i< list.length; i++){
        let target = list[i];
        for(let j=i-1; j >= 0; j--){
            if(list[j] > target){
                list[j+1] = list[j];
                list[j] = target;
            }            
        }
        
    }
    return list;
}

console.log(insertionSort([10,8,5,20,12,2]))
console.log(insertionSort([2,3,6,1,0]))