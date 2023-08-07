import { configureStore } from '@reduxjs/toolkit';
// import {  contactsSliceBuilder } from './contactsSlice';
import { filterSlice } from './filterSlice';
import { tripsSlice } from './tripsSlice';

export const store = configureStore({
  reducer: {
    // contacts: contactsSlice.reducer,
    // contacts: contactsSliceBuilder.reducer,
    trips: tripsSlice.reducer,
    filter: filterSlice.reducer,
  },
});



