export function currencyCodeToSymbol(code) {
  if (code === 'USD') {
    return '$';
  } else if (code === 'EUR') {
    return '€';
  }
  return null;
}

export function itemQuantityLevel(quantity) {
  let itemQuantity = 'item-quantity';
  if (quantity <= 10) {
    itemQuantity += ' level-low';
  } else if (quantity <= 20) {
    itemQuantity += ' level-medium';
  } else if (quantity > 20) {
    itemQuantity += ' level-high';
  }
  return itemQuantity;
}
