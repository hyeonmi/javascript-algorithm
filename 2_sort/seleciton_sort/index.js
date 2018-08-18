function selectionSort(arr){
	let start = 0;
	while (start < arr.length){
		for(let i = start+1; i < arr.length; i++){
			if(arr[start] > arr[i]){
				let temp = arr[start];
				arr[start] = arr[i];
				arr[i] = temp;
			}
		}
		start++;
	}
	return arr;
}

selectionSort([10, 2, 1, 5, 4, 3, 6, 8, 7, 13, 9]);