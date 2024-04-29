export const calculateTotal = (productId, selectedPrice, quantities) => {
    const price = selectedPrice[productId]?.price || 0;
    const quantity = quantities[productId] || 1;
    return price * quantity;
  };
  