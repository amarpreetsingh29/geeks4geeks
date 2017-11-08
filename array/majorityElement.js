function majorityElement(arr) {
    var i, temp, len;
    i = 0;
    temp = {};
    len = arr.length;
    for (; i < len; i++) {
        if (temp[arr[i]]) {
            ++temp[arr[i]];
            if (temp[arr[i]] > len / 2) return arr[i];
        } else {
            temp[arr[i]] = 1;
        }
    }
    return "none"

}