import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import serviceReducer from './ServiceSlice'
import bannerReducer from './BannerSlice'
import transactionSlice from './TransactionSlice'



export const store = configureStore({
  reducer: {
    user: userReducer,
    services: serviceReducer,
    banners: bannerReducer,
    transactions: transactionSlice
  },
})