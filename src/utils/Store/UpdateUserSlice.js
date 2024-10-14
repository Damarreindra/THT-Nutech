import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const updateUser = createAsyncThunk(
  "updateUser/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}profile/update`,
        { first_name: userData.firstName, last_name: userData.lastName },
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


export const updateProfileImage = createAsyncThunk(
  "updateUser/updateProfileImage",
  async (image, { rejectWithValue }) => {
    try {
    
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}profile/image`,
        {file:image},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":"multipart/form-data"
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
)

const updateUserSlice = createSlice({
  name: "updateUser",
  initialState: {
    loading: false,
    updatedUser: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.updatedUser = action.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        console.log("Error:", action.payload);
        state.error = action.payload;
      })


      .addCase(updateProfileImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfileImage.fulfilled, (state, action) => {
        state.loading = false;
        state.updatedUser = action.payload;
        state.error = null;
      })
      .addCase(updateProfileImage.rejected, (state, action) => {
        state.loading = false;
        console.log("Error:", action.payload);
        state.error = action.payload;
      });
  },
});

export default updateUserSlice.reducer;
