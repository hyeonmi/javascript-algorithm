//with for
function insertionSort(list){
    for(let i=1; i< list.length; i++){
        // 비교 대상 값을 저장해 둔다.
        let target = list[i];
        for(let j=i-1; j >= 0; j--){
            if(list[j] > target){
                // 교환되어야 할 값을 복사해서 넣으면 오른쪽으로 비교 값을 한 칸 미룬것과 동일
                list[j+1] = list[j];
                list[j] = target;
            }            
        }
        
    }
    return list;
}


// with while
function insertionSort(arr){
	for(let i=1 ; i < arr.length; i++){
		const target = arr[i];
		let j = i-1;
		while(j >= 0){
            if(target < arr[j]){
				arr[j+1] =  arr[j];
				arr[j] = target;
            }
            j--;
		}
    }

    return arr;
}


console.log(insertionSort([10,8,5,20,12,2]))
console.log(insertionSort([2,3,6,1,0]))