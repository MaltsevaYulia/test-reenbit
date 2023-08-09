import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';


import { filterSlice } from './filterSlice';
import { tripsSlice } from './tripsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    filter: filterSlice.reducer,
    trips: tripsSlice.reducer,
  },
});
