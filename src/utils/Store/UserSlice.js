import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token')

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}login`, 
                userCredentials
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

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async(userCredentials, {rejectWithValue})=>{
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}registration`, 
                userCredentials
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
)

export const fetchProfile = createAsyncThunk(
    'user/fetchProfile',
    async (_, { rejectWithValue }) => {
      try {
      
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}profile`, 
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
  

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log('Error:', action.payload); 
                state.error = action.payload; 
            })

            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
              })
              .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                console.log('Error:', action.payload);
                state.error = action.payload;
              })
              .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
              })
              .addCase(fetchProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data;
              })
              .addCase(fetchProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              });
    },
});

export default userSlice.reducer;
