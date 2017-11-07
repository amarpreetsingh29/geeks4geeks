function reverse(str) {
    var temp = "";
    for (var i = str.length - 1; i != -1; i--) {
        temp = temp.concat(str[i]);
    }
    console.log(temp);
    return temp;
}
reverse('amar');

function revUsingRecursion(str, idx,temp) {
    var i, temp;
    temp=temp || "";
    idx = (idx == 0 || idx) ? idx : str.length - 1;
    if (idx == -1) return temp;
    temp =  temp.concat(str[idx]);
    temp = revUsingRecursion(str, --idx,temp);
    return temp;
}
console.log(revUsingRecursion("amar"));