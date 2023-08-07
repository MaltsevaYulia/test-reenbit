import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = 'https://64d0bddeff953154bb7962f2.mockapi.io';

export const fetchTrips = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/trips`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTrip = createAsyncThunk(
  'contacts/addTrip',
  async (data, thunkAPI) => {
   
    try {
      const response = await axios.post(`${BASE_URL}/trips`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTrip = createAsyncThunk(
  'contacts/deleteTrip',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/trips/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
