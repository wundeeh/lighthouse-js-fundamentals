function lastIndexOf(array, num) {
  for (let i = array.length; i > 0; i--) {
   if (array[i - 1] === num) {
      return i - 1;
     }
  }
  return -1;
}

console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);