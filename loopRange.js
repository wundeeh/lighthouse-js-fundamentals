function range(start, end, step) {

  let answer = [];

  for (let i = start; i <= end; i++) {
    if ( i % step === 0) {
      answer.push(i);
    } 
    if (step <= 0) {
      return [];
    }
  }
  return answer;
}

console.log(range(0, 8, 2));