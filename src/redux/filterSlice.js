import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers: {
    filterTrips: (state, action) => {
      return state = action.payload;
    },
  },
});
export const { filterTrips } = filterSlice.actions;
