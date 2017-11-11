function segOddEven(arr){
     /* Initialize left and right indexes */
        var left = 0, right = arr.length - 1;
        while (left < right)
        {
            /* Increment left index while we see 0 at left */
            while (arr[left]%2 == 0 && left < right)
                left++;
 
            /* Decrement right index while we see 1 at right */
            while (arr[right]%2 == 1 && left < right)
                right--;
 
            if (left < right)
            {
                /* Swap arr[left] and arr[right]*/
                var temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
        return arr;
}
   // segOddEven([12, 34, 45, 9, 8, 90, 3]);
    //1 pass :   12,34,90,9,8,45,3
    //2nd pass : 12,34,90,8,9,45,3;    
    segOddEven([1, 3, 5, 7, 2, 4, 6,8]);