function howManyHundreds (num) {
  let hundreds = ''
    hundreds = (num / 100)

  return Math.floor(hundreds);
}

console.log(howManyHundreds(770));