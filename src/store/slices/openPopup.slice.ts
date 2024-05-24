import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const openPopupSlice = createSlice({
  name: "openPopupSlice",
  initialState: false,
  reducers: {
    popup: (state: boolean, actions: PayloadAction<String>) => {
      if (actions.payload.length === 12) {
        state = true;
      } else if (actions.payload === "close") {
        state = false;
      }
      return state;
    },
  },
});

export const { actions, reducer } = openPopupSlice;
