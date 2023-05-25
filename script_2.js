let number = prompt("De quel nombre veux-tu calculer la factorielle ?")
let value = 1

while(number > 1){
  value *= number;
  number--;
}
console.log(`Le résultat est : ` + value);