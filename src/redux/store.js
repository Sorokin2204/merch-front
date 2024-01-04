import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/user.slice';
import { appReducer } from './slices/app.slice';
import { postReducer } from './slices/post.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    app: appReducer,
  },
});
