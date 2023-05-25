const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// 2.1
for (let index in books) {
  if (books[index].rented == 0) {
    console.log("Un des livres n'a pas été empruntés");
    break;
  }
  console.log("Tous les livres ont été empruntés au moins une fois");
}

// 2.2
let sup = 0;

for (let index in books) {
  if (books[sup].rented < books[index].rented) {
    sup = index;
  }
}
console.log(books[sup]);

// 2.3
let inf = 0;

for (let index in books) {
  if (books[inf].rented > books[index].rented) {
    inf = index;
  }
}
console.log(books[inf]);

// 2.4
console.log(books.find(index => index.id == 873495));

// 2.4
const index = books.findIndex(book => book.id === 133712);
if (index > -1) {
  books.splice(index, 1);
}
console.log(books);

// 2.5
books.sort(function(a, b) {
  var orderA = a.title.toUpperCase();
  var orderB = b.title.toUpperCase();

  if (orderA < orderB) {
    return -1;
  }
  if (orderA > orderB) {
    return 1;
  }
  return 0;
});

console.log(books);
