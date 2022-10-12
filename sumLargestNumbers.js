const sumLargestNumbers = function(data) {
  let biggestNumber = data[0];
  let smallerNumber = data[1];

  if (biggestNumber > smallerNumber) {
    biggestNumber = data[0];
    smallerNumber = data[1]
  } else {
    smallerNumber = data[0];
    biggestNumber = data[1];
  }

   for (let i = 2; i < data.length; i++) {
    if (data[i] > biggestNumber) {
      smallerNumber = biggestNumber;
      biggestNumber = data[i];
    }
   }
   return biggestNumber + smallerNumber;
 }

 console.log(sumLargestNumbers([1, 10]));
 console.log(sumLargestNumbers([1, 2, 3]));
 console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
 