import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const openPopupSlice = createSlice({
  name: 'openPopupSlice',
  initialState: false,
  reducers: {
    requestCode: (state : boolean, actions : PayloadAction<String>) => {
      if (actions.payload.length === 12) {
        state = true;
      }
      return state;
    },
  }
})

export const {actions, reducer} = openPopupSlice;