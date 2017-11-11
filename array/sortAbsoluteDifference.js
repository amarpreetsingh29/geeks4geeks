function sortAbs(a,x){
    var i,j,key;
    for(var i=0;i<a.length;i++){
        diff=Math.abs(a[i]-x);
        j=i-1;
        key=a[i];
        while(Math.abs(a[j]-x)>diff && j>=0){
            a[j+1]=a[j];
            //a[j]=key;
            --j;
        }
        a[j+1]=key;
    }
    console.log(a);
}
sortAbs([10, 5, 3, 9, 2],7)