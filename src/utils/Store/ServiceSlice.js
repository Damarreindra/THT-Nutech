import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token')



export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async (_, { rejectWithValue }) => {
      try {
      
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}services`, 
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
  
        return response.data; 
      } catch (error) {
        if (error.response) {
          return rejectWithValue({
            status: error.response.status,
            message: error.response.data.message,
          });
        }
      }
    }
  );
  

const serviceSlice = createSlice({
    name: 'services',
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
              .addCase(fetchServices.pending, (state) => {
                state.loading = true;
              })
              .addCase(fetchServices.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
              })
              .addCase(fetchServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              });
    },
});

export default serviceSlice.reducer;
