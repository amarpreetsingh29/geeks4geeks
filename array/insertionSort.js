function insertionSort(a){
    var i,j,key;
    for(var i=0;i<a.length;i++){
        key=a[i];
        j=i-1;
        while(a[j]>key && j>=0){
            a[j+1]=a[j];
            //a[j]=key;
            --j;
        }
        a[j+1]=key;
    }
    console.log(a);
}
insertionSort([12, 11, 13, 5, 6])