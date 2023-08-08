import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTrips, addTrip, deleteTrip } from './operations';
import toast from 'react-hot-toast';
const contactsActions = [fetchTrips, addTrip, deleteTrip];
const getActions = type => contactsActions.map(action => action[type]);
const notifySuccess = text => toast.success(text);

export const tripsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addTrip.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        notifySuccess('Trip added successfully');
      })
      .addCase(deleteTrip.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        notifySuccess('Trip  deleted successfully');
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const tripReducer = () => tripsSlice.reducer;
