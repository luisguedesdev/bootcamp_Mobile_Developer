async function addItem(userCart) {
  userCart.push(item);
}

async function removeItem(userCart) {}

async function deleteItem(userCart, name) {}

async function removeItem(userCart, index) {}

async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export { addItem, removeItem, deleteItem, calculateTotal };
