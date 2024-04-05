import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  text: string;
  id: string;
}

interface TodoListState {
  todosList: TodoItem[];
}

const initialState: TodoListState = {
  todosList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todosList.push({
        text: action.payload,
        id: nanoid(),
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.todosList.findIndex(
        (task) => task.id === action.payload
      );
      state.todosList.splice(index, 1);
    },
  },
});

export const { reducer: todoReducer, actions: todoActions } = todoSlice;
