import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetProductReviews = {
  getProductReviews: { data: null, loading: false, error: null },
};

export const getProductReviews = createAsyncThunk('user/getProductReviews', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/review/list`, {
      params: {
        productId: data,
      },
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetProductReviews = {
  [getProductReviews.pending]: (state) => {
    state.getProductReviews.loading = true;
  },
  [getProductReviews.fulfilled]: (state, action) => {
    state.getProductReviews.loading = false;
    state.getProductReviews.data = action.payload;
    state.getProductReviews.error = null;
  },
  [getProductReviews.rejected]: (state, action) => {
    state.getProductReviews.loading = false;
    state.getProductReviews.error = action.payload;
  },
};
