const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: "Main Street",
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

// una deep copy va bene bene avendo tra le sue chiavi solo una arrow function come particolarita

// una structuredClone() avendo tra le sue chiavi oggetti annidati e una funzione di javascript più difficile che con jasonparse(jasonStringfy()) verrebbe resa solo come stringa
