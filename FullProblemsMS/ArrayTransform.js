function transformArray(arr) {
    var i, len, beforeZeroIndex, afterZeroIndex, nextElm, currElm;
    i = 0; len = arr.length;
    for (; i < len; i++) {
        currElm = arr[i];
        nextElm = arr[i + 1];
        if (currElm !== 0 && nextElm === 0) beforeZeroIndex = i;
        if (currElm === 0 && nextElm !== 0 && beforeZeroIndex) {
            afterZeroIndex = i + 1;
            if (arr[beforeZeroIndex] === arr[afterZeroIndex]) {
                arr[beforeZeroIndex] += arr[beforeZeroIndex];
                arr[afterZeroIndex] = 0;
                beforeZeroIndex=afterZeroIndex=0;
            }
        }
    }
    return arr;
}
transformArray([2, 4, 5, 0, 0, 5, 4, 8, 6, 0, 6, 8])