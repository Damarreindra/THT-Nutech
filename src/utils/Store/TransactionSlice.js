import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const fetchBalance = createAsyncThunk(
    'transaction/fetchBalance',
    async (_, { rejectWithValue }) => {
      try {
      
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}balance`, 
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

  
export const fetchTransaction = createAsyncThunk(
    'transaction/fetchTransaction',
    async (limit, { rejectWithValue }) => {
      try {
      
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}transaction/history?limit=${limit}`, 
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

  
export const topUp = createAsyncThunk(
    'transaction/topUp',
    async (amount, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}topup`, 
                {top_up_amount:amount}
            ,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
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

export const payment = createAsyncThunk(
  'transaction/payment',
  async (code, { rejectWithValue }) => {
      try {
          const response = await axios.post(
              `${process.env.REACT_APP_API_URL}transaction`, 
              {service_code:code}
          ,{
              headers:{
                  Authorization:`Bearer ${token}`
              }
          });
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

  


const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    loading: false,
    balance: null,
    error: null,
    data:null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.data;
      })
      .addCase(fetchBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(topUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(topUp.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(topUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      .addCase(payment.pending, (state) => {
        state.loading = true;
      })
      .addCase(payment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(payment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(fetchTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default transactionSlice.reducer;
