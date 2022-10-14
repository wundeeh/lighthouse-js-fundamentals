const urlEncode = function(text) {
  const space = " ";
  let newText = "";
  const percTwenty = "%20";
  text = text.trim();

  for (i = 0; i < text.length; i++) {
    if (text[i] === space) {
      newText += percTwenty;
    } else {
      newText += text[i]
    }
  }
  return newText;
};

console.log(urlEncode(" Lighthouse Labs "));