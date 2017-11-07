function removeCharsConcat(str){
    var i,temp,idx;
    temp="";
    var s1=str.split("\n")[0];
    var s2=str.split("\n")[1];
    for(i=0;i<s1.length;i++){
        idx = s2.indexOf(s1[i]);
        if(idx == -1)  temp=temp.concat(s1[i]);
    }
    for(i=0;i<s2.length;i++){
        idx = s1.indexOf(s2[i]);
        if(idx == -1)  temp=temp.concat(s2[i]);
    }
    console.log(temp);
    return temp;
}
removeCharsConcat(
`abcs
cxzca`);

