function rearr(a){
    var p,n,l,r;
    p=[];
    n=[];
    r=[];
    for(var i=0;i<a.length;i++){
        if(a[i] >0) p.push(a[i]);
        if(a[i]<0) n.push(a[i]);
    }
    for(var i=0;i<a.length;i++){
        if(i<p.length) r.push(p[i]);
        if(i<n.length) r.push(n[i]);
    }
    return r;
}

var arr=[-1, 2, -3, 4, 5, 6, -7, 8, 9];
rearr(arr);
