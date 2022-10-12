const conditionalSum = function(values, condition) {
  if (values.length === 0) {
    return 0;
  }

  let answer = 0;

  for ( i = 0; i < values.length; i++) {
    if(condition === 'even' && values[i] % 2 === 0){
      answer += values[i];
  } else if (condition === 'odd' && values[i] % 2 !== 0){
    answer += values[i];
    }
  }

  return answer;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));