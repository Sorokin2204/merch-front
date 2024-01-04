import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetPostCountry = {
  getPostCountry: { data: null, loading: false, error: null },
};

export const getPostCountry = createAsyncThunk('post/getPostCountry', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/post/country-list`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetPostCountry = {
  [getPostCountry.pending]: (state) => {
    state.getPostCountry.loading = true;
  },
  [getPostCountry.fulfilled]: (state, action) => {
    state.getPostCountry.loading = false;
    state.getPostCountry.data = action.payload;
    state.getPostCountry.error = null;
  },
  [getPostCountry.rejected]: (state, action) => {
    state.getPostCountry.loading = false;
    state.getPostCountry.error = action.payload;
  },
};
