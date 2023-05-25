let size = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'etages veux-tu ?");
let pyram = ""

for(let x = 0, y = size; x <= size; x++, y--) {
  if (x > 0) {
    let spaces = " ".repeat(y);
    let hashes = "#".repeat(x);
    console.log(spaces + hashes);
  }
}