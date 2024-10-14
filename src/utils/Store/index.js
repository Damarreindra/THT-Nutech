import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import serviceReducer from "./ServiceSlice";
import bannerReducer from "./BannerSlice";
import transactionReducer from "./TransactionSlice";
import updateUserReducer from "./UpdateUserSlice";
import AuthReducer from "./AuthSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    services: serviceReducer,
    banners: bannerReducer,
    transactions: transactionReducer,
    updateUser: updateUserReducer,
    auth:AuthReducer
  },
});
