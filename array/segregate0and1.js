function segregate0and1(a){
    console.log(a.length)
    var count=-1;
    var n=a.length;
    for(var i=0;i<n;i++){
        if(a[i]==1)a[++count]=1;
    }
    for(++count;count<n;count++){
        a[count]=0;
    }
   /*  ++count;
    while(count<n){
        a[count]=0;
        ++count;
    } */
    console.log(a.length)
    return a;
}
segregate0and1([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]);

