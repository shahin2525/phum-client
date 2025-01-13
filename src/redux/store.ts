import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/feature/auth/authSlice.ts";
import { baseApi } from "./api/baseApi.ts";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
