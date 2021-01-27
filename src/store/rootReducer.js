import { combineReducers } from "redux";
import { CartReducer } from "./reducers/CartReducer";

const rootReducer = combineReducers({
  cart: CartReducer,
});

export default rootReducer;
