import * as Types from "./ActionTypes";

export function addToCart(item) {
  return { type: Types.ADD_TO_CART, item };
}
export function removeFromCart(item) {
  return { type: Types.REMOVE_ITEM_CART, item };
}
export function clearCart(item) {
  return { type: Types.CLEAR_CART, item };
}
export function toggleCartOpen() {
  return { type: Types.TOGGLE_CART_OPEN };
}
export function toggleCartClose() {
  return { type: Types.TOGGLE_CART_CLOSE };
}
