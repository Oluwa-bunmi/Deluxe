import cartReducer from "./reducers/cart.reducer";
import productReducer from "./reducers/product.reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import favoriteReducer from "./reducers/favorite.reducer";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  favorites: favoriteReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for persisted state
    });
    if (process.env.NODE_ENV === "development") middleware.push(logger);
    return middleware;
  },
});

export const persistor = persistStore(store);
export default store;
