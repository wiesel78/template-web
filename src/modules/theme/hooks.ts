import { PaletteMode } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectThemeMode, toggleTheme } from "./slice";

// Hooks
export function useThemeMode(): [PaletteMode, () => void] {
    const themeType = useAppSelector(selectThemeMode);
    const dispatch = useAppDispatch();

    return [themeType, () => dispatch(toggleTheme())];
}
