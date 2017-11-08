function maxSumSubArray(arr) {
    var start, end, max;
    max = 0;
    for (i = 0; i < arr.length; i++) {
        sum = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            sum = sum + arr[j];
            if (sum > max) {
                max = sum;
                start = i;
                end = j;
            }
        }
    }
    console.log(start, end);
    return arr.slice(start, end+1);
}
maxSumSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);