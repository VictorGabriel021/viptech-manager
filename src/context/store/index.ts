import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "context/reducers/User";

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
