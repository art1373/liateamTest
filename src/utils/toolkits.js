export function moneySplitter(input) {
  if (input === 0 || input == null) {
    return 0;
  } else {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export const addToItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decrementItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
//this is similar to decrment Item But I think seperating them was 
//better for Code readability
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

};

export const calcQuantity = (cartItems) => {
  return cartItems.reduce(
    (currtentQty, items) => currtentQty + (items["quantity"] || 0),
    0
  );
};

export const calcTotalPrice = (cartItems) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price.final_price,
    0
  );
  return moneySplitter(totalPrice);
};
