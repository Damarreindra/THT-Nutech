import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
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
    'auth/registerUser',
    async(userCredentials, {rejectWithValue})=>{
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}registration`, 
                userCredentials,
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


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        loggedUser: null,
        registeredUser:null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.loggedUser = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.loggedUser = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.loggedUser = null;
                console.log('Error:', action.payload); 
                state.error = action.payload; 
            })

            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.registeredUser = action.payload;
                state.error = null;
              })
              .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                console.log('Error:', action.payload);
                state.error = action.payload;
              })

    },
});

export default authSlice.reducer;
