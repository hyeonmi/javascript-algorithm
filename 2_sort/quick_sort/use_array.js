function quickSort(list){
    if(list.length < 2){
        return list;
    }

    const pivot = parseInt(list.length/2, 10);
    const pivotData = list[pivot];

    let minList = [];
    let maxList = [];

    for(let i = 0; i < list.length; i++){
        let value = list[i];

        if(value < pivotData){
            minList.push(value);
        } else if(value > pivotData) {
            maxList.push(value);
        }
    }

    const resultMinList = quickSort(minList);
    const resultMaxList = quickSort(maxList);

    return resultMinList.concat(pivotData, resultMaxList);
}