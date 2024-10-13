import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const fetchBanner = createAsyncThunk(
    'banners/fetchBanner',
    async (_, { rejectWithValue }) => {
      try {
      
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}banner`, 
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
  


const bannerSlice = createSlice({
  name: "banners",
  initialState: {
    loading: false,
    banner: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.banner = action.payload.data;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bannerSlice.reducer;
