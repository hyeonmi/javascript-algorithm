function isSubString(str, find){
    if(str.length === 0 && find.length === 0){
        return true;
    }

    for(var i = 0; i < str.length; i++){
        var foundNonMatch = false;
        for(var j = 0; j < find.length; j++){
            if(str[i+j] !== find[j]){
                foundNonMatch = true;
                break;
            }
        }

        if(!foundNonMatch){
            return true;
        }

    }

    return false;


}

isSubString("abate", "bat");
