function subArray(arr) {
    var i, j, result;
    i = 0;
    len = arr.length;
    result = [];
    for (; i < len; i++) {
        result.push([arr[i]]);
        for (j = i + 1; j < len; j++) {
            result.push(result[result.length - 1].concat(arr[j]));
        }
    }
    console.log(result);
    return result;
}

subArray([1,2,3,4])
