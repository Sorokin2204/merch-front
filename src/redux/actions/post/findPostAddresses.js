import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateFindPostAddresses = {
  findPostAddresses: { data: null, loading: false, error: null },
};

export const findPostAddresses = createAsyncThunk('post/findPostAddresses', async (query, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/post/find-addresses`, {
      params: {
        query,
      },
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerFindPostAddresses = {
  [findPostAddresses.pending]: (state) => {
    state.findPostAddresses.loading = true;
  },
  [findPostAddresses.fulfilled]: (state, action) => {
    state.findPostAddresses.loading = false;
    state.findPostAddresses.data = action.payload;
    state.findPostAddresses.error = null;
  },
  [findPostAddresses.rejected]: (state, action) => {
    state.findPostAddresses.loading = false;
    state.findPostAddresses.error = action.payload;
  },
};
