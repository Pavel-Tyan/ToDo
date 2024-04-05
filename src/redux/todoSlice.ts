import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  text: string;
  id: string;
}

interface TodoListState {
  todos: TodoItem[];
}

const initialState: TodoListState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        text: action.payload,
        id: nanoid(),
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((task) => task.id === action.payload);
      state.todos.splice(index, 1);
    },
  },
});

export const { reducer: todoReducer, actions: todoActions } = todoSlice;
