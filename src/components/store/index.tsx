import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { googleSheetsApi } from "./backEndApi";
import { reducer as closeSectionReducer } from "./slices/closeSection.slice";
import { reducer as openPopupReducer } from "./slices/openPopup.slice";

const reducers = combineReducers({
  open: openPopupReducer,
  close: closeSectionReducer,
  [googleSheetsApi.reducerPath]: googleSheetsApi.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(googleSheetsApi.middleware),
  devTools: true,
})

