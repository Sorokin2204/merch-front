import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateCalculatePostCost = {
  calculatePostCost: { data: null, loading: false, error: null },
};

export const calculatePostCost = createAsyncThunk('post/calculatePostCost', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/post/calculate-cost`, data)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerCalculatePostCost = {
  [calculatePostCost.pending]: (state) => {
    state.calculatePostCost.loading = true;
  },
  [calculatePostCost.fulfilled]: (state, action) => {
    state.calculatePostCost.loading = false;
    state.calculatePostCost.data = action.payload;
    state.calculatePostCost.error = null;
  },
  [calculatePostCost.rejected]: (state, action) => {
    state.calculatePostCost.data = null;
    state.calculatePostCost.loading = false;
    state.calculatePostCost.error = action.payload;
  },
};
