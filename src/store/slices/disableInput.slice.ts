import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const isDisableInputSlice = createSlice({
  name: "isDisableInputSlice",
  initialState: false,
  reducers: {
    isDisableInput: (state: boolean, actions: PayloadAction<String>) => {
      if (actions.payload.length === 12) {
        state = true;
      } else state = false;
      return state;
    },
  },
});

export const { actions, reducer } = isDisableInputSlice;
