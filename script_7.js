sentence = prompt("Acné-Bot : Quoi ?");

function isUpCase(str) {
  return str == str.toUpperCase();
}

if (sentence.slice(-1) === "?") {
  console.log("Ouais Ouais...");
} else if (isUpCase(sentence) && sentence !== "") {
  console.log("Pwa, calme-toi...");
} else if (sentence.indexOf("Fortnite") !== -1) {
  console.log("on s'fait une partie soum-soum ?");
} else if (sentence === "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}