import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};
const Middlewares = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === "development") {
  Middlewares.push(logger);
  Middlewares.push(reduxImmutableStateInvariant());
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...Middlewares))
);
export const persistor = persistStore(store);
