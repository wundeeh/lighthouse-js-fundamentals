const carPassing = function (cars, speed) {
  cars.push({time: Date.now(), speed: speed});
  return cars;
}

console.log(carPassing(cars, speed))