import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const { payload } = action;
      // Check if the item already exists in favorites
      const existingItem = state.favorites.find(
        (item) => item._id === payload._id
      );
      if (!existingItem) {
        state.favorites.push(payload);
      }
    },
    removeFromFavorites(state, action) {
      const { payload } = action;
      state.favorites = state.favorites.filter(
        (item) => item._id !== payload._id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;

export const selectFavoritesCount = (state) => state.favorites.favorites.length;
