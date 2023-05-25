let size = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for(let x = 0, y = size; x <= size; x++, y--) {
  if (x > 0) {
    console.log(" ".repeat(y) + "#".repeat(x));
  }
};