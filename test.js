const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codevill Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
]

// good stations have at least 20 capacity
// stations must be schools or community centres

function chooseStation(stations) {
  const goodStations = [];

  for (const station of stations) {
    const capacity = station[1]

    if (capacity >= 20) {

    const place = station[2];
      
    if (place === 'school' || place === 'community centre') {
      goodStations.push(station[0]);
        }
      }
    }

    return goodStations;
  }

console.log(chooseStation(stations));
