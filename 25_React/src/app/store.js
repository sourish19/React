import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//  In most cases the store will be a singleton object
export const store = configureStore({
    reducer: todoReducer
}); 

//  This is the central hub of the Redux state management