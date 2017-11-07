function longestSubstringOf1(str){
    var i,j,len,temp,res,max,onCount,start,end;
    i=max=onCount= 0; 
    len = str.length;
    for(;i<len;i++){
        for(j=i+1;j<=len;j++){
            temp = str.substring(i,j);
            onCount=0;
            for(k=0;k<temp.length;k++){
                if(temp[k]==1){
                    ++onCount;
                }else {
                    onCount=0;
                    break;
                };
            }
            if(max<onCount) {max = onCount;start=i;end=j;}
        }
    }
    console.log(start,end,str.slice(start,end));
    return max;
}
longestSubstringOf1("110111100");
longestSubstringOf1("11101110");
longestSubstringOf1("00000000");