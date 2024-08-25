import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import genericReducer from "./slices/GenericSlice";
import { listenerMiddleware } from "./listeners";

const store = configureStore({
  reducer: {
    auth: authReducer,
    generic: genericReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware);
  },
});

export const makeStore = () => {
  return store;
};

// Infer the `AppRootState` and `AppDispatch` types from the store itself
export type AppRootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const dispatch = store.dispatch;
export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof makeStore>;
