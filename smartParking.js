const whereCanIPark = function (spots, vehicle) {
  
  for (i = 0; i < spots.length; i++) {
    for (j = 0; j < spots[i].length; j++) {

      const spot = spots[i][j];

      if (vehicle === "regular") {
        if (spot === "R") {
          return [j, i];
        }
      } else if (vehicle === "small") {
        if (spot === "R" || spot === "S") {
          return [j, i];
        }
      } else if (vehicle === "motorcycle") {
        if (spot === "r" || spot === "S" || spot === "M") {
          return [j, i];
        }
      }
    }
  }

  return false;
};

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));