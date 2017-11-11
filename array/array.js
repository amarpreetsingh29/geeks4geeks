function pairSumX(arr, x) {
    var i, j, len, result;
    len = arr && arr.length || 0;
    result = [];
    for (i = 0; i < len - 1; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === x) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}
//console.log(pairSumX([1,3,5,2,1,2],4));
//console.log(pairSumX([1, 4, 45, 6, 10, -8],16));
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
//console.log(majorityElement([1, 3, 3, 1, 2]));
//console.log(majorityElement([2,2,2,2,5,5,2,3,3]));

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
    return result;
}

console.log(subArray([1, 2, 3, 4]));
//subArray([-2, -3, 4, -1, -2, 1, 5, -3]);

function subSequence(arr) {
    var i, j, k, result;
    i = 0;
    len = arr.length;
    result = [];
    for (; i < len; i++) {
        result.push([arr[i]]);
        for (j = i + 1; j < len; j++) {
            result.push(result[result.length - 1].concat(arr[j]));
        }
        for (k = i + 1; k < len; k++) {
            result.push([arr[i], arr[k]]);
        }
    }
    return result;
}
//console.log(subSequence([1, 2, 3, 4]));

function maxSumSubArray(arr) {
    var i, j, len, sum, start, end, temp,max;
    i = 0;
    len = arr && arr.length || 0;
   
    temp=max=0;
    for (; i < len; i++) {
        temp = 0;
        for (j = i; j < len; j++) {
            temp = temp + arr[j];
            if(temp>max){
                max = temp;
                start = i;
                end = j;
            }
        }
    }
    //  return 
    console.log(max, arr.slice(start, end + 1));
}
//maxSumSubArray([1, 2, 3, 4]);
//maxSumSubArray([1, 2, -1]);
//maxSumSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);
