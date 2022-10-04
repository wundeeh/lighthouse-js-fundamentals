const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  let coordinates = [0, 0];
    
  for (let direction of moves) {
    if (direction === 'north') {
      coordinates[1] ++
    } else if (direction === 'west') {
      coordinates[0] --
    } else if (direction === 'east') {
      coordinates[0] ++
    }
    }
    
    return coordinates;
  }


console.log(finalPosition(moves));