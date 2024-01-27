import { createSlice } from '@reduxjs/toolkit';
import { initStateGetProductReviews, reducerGetProductReviews } from '../actions/app/getProductReviews';

export const initialState = {
  ...initStateGetProductReviews,
  activeTariff: null,
  cart: null,
  activeTheme: localStorage.getItem('theme-dark') ? 'dark' : 'light',
  activePayment: null,
  clickedChangeCount: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveTariff(state, action) {
      state.activeTariff = action.payload;
    },
    setActivePayment(state, action) {
      state.activePayment = action.payload;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    setActiveTheme(state, action) {
      state.activeTheme = action.payload;
    },
    setClickedChangeCount(state, action) {
      state.clickedChangeCount = action.payload;
    },
  },
  extraReducers: {
    ...reducerGetProductReviews,
  },
});
export const { setActiveTariff, setCart, setActiveTheme, setActivePayment, setClickedChangeCount } = appSlice.actions;
export const appReducer = appSlice.reducer;
