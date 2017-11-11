function partition(a,l,h){
    var i,start,end,n;
    n=a.length;
    i=0;start=0;end=n-1;
    for(;i<end;){
        if(a[i]<l){
            var temp=a[start];
            a[start]=a[i];
            a[i]=temp;
            ++i;
            ++start;
        }else if(a[i]>h){
            var temp = a[end];
            a[end]=a[i];
            a[i]=temp;
            --end;
        }else{
            ++i;
        }
    }
    return a;
}
partition([1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32],10,20);

function rt(arr,lowVal,highVal){
    var  n = arr.length;
         
        // Initialize ext available positions for
        // smaller (than range) and greater lements
        var start = 0;var end = n-1;
         
         // Traverse elements from left
        for(var i = 0; i < end;)
        {
             
            // If current element is smaller than
            // range, put it on next available smaller
            // position.
             
            if(arr[i] < lowVal)
            {
                 
                var temp = arr[start];
                arr[start] = arr[i];
                arr[i] = temp;
                start++;
                i++;
                 
            }
             
            // If current element is greater than
            // range, put it on next available greater
            // position.
            else if(arr[i] > highVal)
            {
                 
                var temp = arr[end];
                arr[end] = arr[i];
                arr[i] = temp;
                end--;
                  
            }
             
            else
               i++;
        }
        return arr;
}
    rt([1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32],10,20);