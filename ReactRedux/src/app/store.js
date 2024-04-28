// Import the configureStore function from the @reduxjs/toolkit library
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice';

// Create a new store using the configureStore function
// The store is currently empty, as no reducers have been added to it yet
export const store = configureStore({
    reducer: todoReducer
});