//Item com  subtotal

async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    //Função -> Arrow funnction
    subtotal: () => price * quantity,
  };
}

export default createItem;
