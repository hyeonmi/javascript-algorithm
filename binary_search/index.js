var someArray = [2,3,5,8,9,10,15];
var target = 3;

var find = function(someArray, target){
    var mid = 0;
    var targetList;
    var total = someArray.length;

    mid = total/2
    var pickMid = someArray[mid];
    if(pickMid === target){
        return target;
    }else if(pickMid > target){
        //mid 기준으로 앞 배열
    } else {
        //mid 기준으로 뒷 배열
    }


}