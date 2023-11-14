import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import your authReducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your authReducer here
    // Add other reducers if you have them
  }
});

export default store;
