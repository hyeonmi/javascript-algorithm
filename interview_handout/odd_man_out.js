function oddManOut(arr){
    var value = 0;
    for(var i = 0; i < arr.length; i++){
        value ^= arr[i];
    }
    return value;
}