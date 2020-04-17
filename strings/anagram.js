function anagram(str1, str2) {
    var hash1 = createHash(str1)
    var hash2 = createHash(str2)
    return compare(hash1, hash2)
}
function createHash(str) {
    let result = {};
    for (let index = 0; index < str.length; index++) {
      const element = str[index];
      result[element] = [...result[element] || [], index];
    }
    return result;
}

function compare(hash1, hash2) {
    if(Object.keys(hash1).length !== Object.keys(hash2).length) return false
    for(var prop in hash1){
        if(!hash2[prop]) return false
        if(hash2[prop].length !== hash1[prop].length) return false
    }
    return true
}

console.log(anagram('cat','tca'))