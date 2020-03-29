function oddSum(array, num_of_partitions){
    let accumultor = count = 0;
    let result = [];
    for (let index = 0; index < array.length ; index++) {
        // count reached
        if(count==num_of_partitions) break

        //last element
        if(index == array.length-1 && array[index]%2==1){
            result.push(index)
            break
        }

        //beginning of new subset and marking index
        if(accumultor == 0) {
            result.push(index)
            accumultor+=array[index]
            continue
        }
        //accumulating values all along
        accumultor+=array[index]

        //odd check and reset accumulator for new subset
        if(accumultor%2==1){
            ++count
            accumultor = 0
        }
    }
    
    return count==0 ? [-1] : result
}

var result = oddSum([ 7, 2, 11, 4, 19],3)
console.log(result)