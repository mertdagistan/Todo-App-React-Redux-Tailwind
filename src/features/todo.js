import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    create: (state, action) => {
      state.todos.push(action.payload);
    },
    update: (state, action) => {
      state.todos[action.payload.index] = action.payload;
    },
    remove: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    toggleStatus: (state, action) => {
      console.log(state.todos.filter((todo) => todo.id === action.payload.id));
      console.log(action.payload);

      state.todos[action.payload].status = !action.payload.status;
    },
  },
});

export const { create, update, remove, toggleStatus } = todoSlice.actions;

export default todoSlice.reducer;
