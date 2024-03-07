import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const closeSectionSlice = createSlice({
  name: 'closeSectionSlice',
  initialState: true,
  reducers: {
    closeSection: (state: boolean, actions : PayloadAction<String>) => {
      if (actions.payload === 'close') {
        state = false;     
      } return state
    }
  }
})


export const {actions, reducer} = closeSectionSlice;  
