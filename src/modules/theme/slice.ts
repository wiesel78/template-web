import { PaletteMode, Theme, ThemeOptions } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isDarkTheme, isDarkThemeOptions } from "./utils";
import { darkTheme, lightTheme } from "./theme";
import { RootState } from "../../store";

// Types
export interface ThemeState {
    theme: ThemeOptions;
}

// State
const initialState: ThemeState = {
    theme: darkTheme,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeOptions>) => {
            return { ...state, theme: action.payload };
        },
        toggleTheme: (state) => {
            return {
                ...state,
                theme: isDarkTheme(state.theme) ? lightTheme : darkTheme,
            };
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;
export const selectThemeMode = (state: RootState): PaletteMode =>
    selectTheme(state).palette?.mode ?? "dark";

export default themeSlice.reducer;
