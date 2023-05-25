const code = "CCGUCGUUGCGCUACAGC";
let transCode = "";


for (let index = 0; index < code.length + 1; index++) {
  if (index % 3 === 0 && index > 0) {
    if (index >= 4) {
      transCode += "-";
    }
    if (code.slice(index-3, index) == "UCU" || code.slice(index-3, index) == "UCC" || code.slice(index-3, index) == "UCA" || code.slice(index-3, index) == "UCG" || code.slice(index-3, index) == "AGU" || code.slice(index-3, index) ==  "AGC") {
      transCode += "Sérine";
    } else if (code.slice(index-3, index) == "CCU" || code.slice(index-3, index) == "CCC" || code.slice(index-3, index) == "CCA" || code.slice(index-3, index) == "CCG" ) {
      transCode += "Proline";
    } else if (code.slice(index-3, index) == "UUA" || code.slice(index-3, index) == "UUG" ) {
      transCode += "Leucine";
    } else if (code.slice(index-3, index) == "UUU" || code.slice(index-3, index) == "UUC" ) {
      transCode += "Phénylalanine";
    } else if (code.slice(index-3, index) == "CGU" || code.slice(index-3, index) == "CGC" || code.slice(index-3, index) == "CGA" || code.slice(index-3, index) == "CGG" || code.slice(index-3, index) ==  "AGA" || code.slice(index-3, index) ==  "AGG") {
      transCode += "Arginine";
    } else if (code.slice(index-3, index) == "UAU" || code.slice(index-3, index) == "UAC" ) {
      transCode += "Tyrosine";
    }
  }
}

console.log(transCode);