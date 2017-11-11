function moveAllZeroToEnd(a){
    var i,count,n;
    count=-1;
    n=a.length;
    for(i=0;i<n;i++){
        if(a[i]!=0){ 
            a[++count]=a[i];
        }
    }
    while(count<n-1){
        a[++count]=0;
    }
    return a;
}
moveAllZeroToEnd([1, 2, 0, 4, 3, 0, 5, 0])