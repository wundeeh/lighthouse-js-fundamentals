const numberOfVowels = function(data) {
  let vowels = ["a", "e", "i", "o", "u"];
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < vowels.length; x++) {
      if (data[i] === vowels[x]) {
        sum++;
      }
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
