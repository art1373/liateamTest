import * as Types from "../actions/ActionTypes";
import { removeItemFromCart, decrementItem, addToItem } from "../../utils/toolkits";

const initialState = {
  items: [],
  cartPrev: false,
};

export function CartReducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return {
        ...state,
        items: addToItem(state.items, action.item),
      };
    case Types.REMOVE_ITEM_CART:
      return {
        ...state,
        items: decrementItem(state.items, action.item),
      };
    case Types.CLEAR_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.item),
      };
    case Types.TOGGLE_CART_OPEN:
      return {
        ...state,
        cartPrev: !state.cartPrev,
      };
    case Types.TOGGLE_CART_CLOSE:
      return {
        ...state,
        cartPrev: false,
      };
    default:
      return state;
  }
}
