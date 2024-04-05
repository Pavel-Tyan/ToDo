import { createSlice } from "@reduxjs/toolkit";

interface Theme {
  color: "dark" | "light";
}

const initialState: Theme = {
  color: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      if (state.color === "dark") {
        state.color = "light";
      } else {
        state.color = "dark";
      }
    },
  },
});

export const { reducer: themeReducer, actions: themeActions } = themeSlice;
