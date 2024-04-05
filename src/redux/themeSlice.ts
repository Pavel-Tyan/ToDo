import { createSlice } from "@reduxjs/toolkit";

interface Theme {
  color: "dark" | "white";
}

const initialState: Theme = {
  color: "white",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      if (state.color === "dark") {
        state.color = "white";
      } else {
        state.color = "dark";
      }
    },
  },
});

export const { reducer: themeReducer, actions: themeActions } = themeSlice;
