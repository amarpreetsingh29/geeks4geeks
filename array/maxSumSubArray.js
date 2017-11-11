function maxSumSubArray(arr) {
    var start, end, max,sum;
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

function maxPSubArray(arr) {
    var start, end, max,p;
    max = 0;
    for (i = 0; i < arr.length; i++) {
        p = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            p = p * arr[j];
            if (p > max) {
                max = p;
                start = i;
                end = j;
            }
        }
    }
    console.log(start, end);
    return arr.slice(start, end+1);
}
maxPSubArray([6, -3, -10, 0, 2])