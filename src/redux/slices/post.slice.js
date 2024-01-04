import { createSlice } from '@reduxjs/toolkit';

import { initStateGetPostCountry, reducerGetPostCountry } from '../actions/post/getPostCountry';
import { initStateFindPostAddresses, reducerFindPostAddresses } from '../actions/post/findPostAddresses';
import { initStateCalculatePostCost, reducerCalculatePostCost } from '../actions/post/calculatePostCost';

export const initialState = {
  ...initStateGetPostCountry,
  ...initStateFindPostAddresses,
  ...initStateCalculatePostCost,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetCalculatePostCost(state) {
      state.calculatePostCost = initStateCalculatePostCost.calculatePostCost;
    },
    resetFindPostAddresses(state) {
      state.findPostAddresses = initStateFindPostAddresses.findPostAddresses;
    },
  },
  extraReducers: {
    ...reducerGetPostCountry,
    ...reducerFindPostAddresses,
    ...reducerCalculatePostCost,
  },
});
export const { resetFindPostAddresses, resetCalculatePostCost } = postSlice.actions;
export const postReducer = postSlice.reducer;
