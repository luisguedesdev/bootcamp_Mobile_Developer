import createItem from "./services/itens.js";

console.log("Welcome to the your shopping cart service!");

const iten1 = await createItem("Batata", 2.45, 3);
const iten2 = await createItem("Arroz", 1.99, 5);

console.log(iten1.subtotal());
console.log(iten2.subtotal());
