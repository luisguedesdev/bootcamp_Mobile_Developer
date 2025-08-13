async function addItem(userCart, item) {
  userCart.push(item);
}

//Esse irá deletar todos os itens com o mesmo nome do carrinho
async function deleteItemName(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function deleteItem(userCart, index) {
  const deleteIndex = index - 1;
  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

//Calcula o tatal do carrinho
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log("\nCart total is");
  console.log(`Total:${result}`);
}

async function displayCart(userCart) {
  console.log("\nCart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}.${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal ${item.subtotal()} `
    );
  });
}

export {
  addItem,
  removeItem,
  deleteItem,
  calculateTotal,
  displayCart,
  deleteItemName,
};
