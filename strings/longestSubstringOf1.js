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
            if(max<onCount) {max = onCount;start=i;end=j-1;}
        }
    }
    console.log(start,end,str.slice(start,end+1));
    return max;
}
longestSubstringOf1("110111100");
longestSubstringOf1("11101110");
///longestSubstringOf1("00000000");

function longestSubstring(str){
   var m_e_h,m_s_f,start,end,s;
   m_e_h=m_s_f=0;
   start=end=s=0;
    for(var i=0;i<str.length;i++){
        if(Number(str[i])===1){
            ++m_e_h;
            if(m_e_h>m_s_f){
                m_s_f=m_e_h;
                start=s;
                end=i;
            }
        }else if(Number(str[i])===0){
            m_e_h=0;
            s=i+1;
        }
    }
    console.log(start,end,m_s_f,str.slice(start,end+1));
    return m_s_f;
}
longestSubstring("110111100");
longestSubstring("11101110");