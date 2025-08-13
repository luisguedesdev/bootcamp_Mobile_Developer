import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishlist = []; //lista de desejos
console.log("Welcome to the your shopping cart service!");


// Criando itens 
const iten1 = await createItem("Batata", 2.99, 6);
const iten2 = await createItem("Arroz", 3.99, 3);
const iten3 = await createItem("Chuchu", 1.99, 3)

// Colocando itens no carrinho
await cartService.addItem(myCart, iten1);
await cartService.addItem(myCart, iten2);
await cartService.addItem(myCart, iten3);
await cartService.displayCart(myCart)

await cartService.removeItem(myCart, iten3)


await cartService.displayCart(myCart)

// await cartService.deleteItem(myCart, iten2.name)


await cartService.calculateTotal(myCart);



