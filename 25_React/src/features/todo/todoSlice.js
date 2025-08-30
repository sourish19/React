import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", title: "Learn React", completed: true }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo:(state,action)=>{
        const todo = {
            id: nanoid(),
            title: action.payload,
            completed: false
        }
        state.todos.push(todo)
    },
    removeTodo: (state,action)=>{
        state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
    }
  },
});

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer

//  reducers includes properties like actions & functions
//  In Context api we use to declare the function but here we need to define the function
//  These functions will have parameters - state, action
// state - The current state of the store
// action - Value of the action dispatched, the data we are going to pass