function patternMatch(dictionay, pattern) {
  var result = [];
  var patternHash = positionHash(pattern);
  var valuesPatternHash = Object.values(patternHash);
  dictionay.forEach(word => {
    let wordHash = positionHash(word);
    let valuesWordHash = Object.values(wordHash);
    if(compare(valuesWordHash,valuesPatternHash)){
        result = [...result, word]
    }
  });
  return result;
}

function positionHash(word) {
  let result = {};
  for (let index = 0; index < word.length; index++) {
    const element = word[index];
    result[element] = [...result[element] || [], index];
  }
  return result;
}

function compare(arr1, arr2) {
    let flag = true;
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].length !== arr2[i].length) return false
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] !== arr2[i][j]) return false 
        }
    }
    return true
}

console.log(patternMatch(['cfoo','cfoodo','abii','abcd'],'dbee'))

console.log(patternMatch(['abb','cfoodo','abii','xyy'],'foo'))