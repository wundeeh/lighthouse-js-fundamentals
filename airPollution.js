const checkAir = function (samples, threshold) {
  let pollution = 0;
  let answer = "";

  for (i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      pollution++;
    }
    if (pollution / samples.length > threshold) {
      answer = "Polluted";
    } else if (pollution / samples.length < threshold) {
      answer = "Clean";
    }
  }
  return answer;
};

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));