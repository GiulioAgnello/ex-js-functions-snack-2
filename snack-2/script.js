const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // "Salad"
console.log(secondBurger.ingredients[0]); // "Salad"

// sono stati creati due oggetti, la chiave puo essere avariata con nella copia senza avere effetti sulla Permia, mentre per quanto riguarda i valori nell'array rimangono soggetti a variazione anhe nell'originale
