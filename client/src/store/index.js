import { configureStore } from "@reduxjs/toolkit";
import gitDetailReducer from "./reducers/gitDetailSlice";

export const store = configureStore({
  reducer: {
    gitDetails: gitDetailReducer,
  },
});
