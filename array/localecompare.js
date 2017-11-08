function localeCompare(s1, s2) {
    var i;
    i = 0;
    for (; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
            continue;
        }
        if (s1[i] > s2[i]) {
            return "s1 greater"
        } else if (s1[i] < s2[i]) {
            return "s2 greater"
        }
    }
    if (s1.length === s2.length) return "equal";
    else if (s1.length > s2.length) return "s1 greater";
    else return "s2 greater";
}
console.log(localeCompare("amarpp","amarp"));
console.log(localeCompare("amarp", "bmarp"));
console.log(localeCompare("amar", "amar"));