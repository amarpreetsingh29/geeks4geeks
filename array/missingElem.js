function missingELm(arr){
    var i;
    i=0;
    for(;i<arr.lengthl;i=i+2){
        if(arr[i+1]-arr[i]!==0){
            return arr[i]+1;
        }
    }
}