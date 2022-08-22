import { Palette, PaletteMode, PaletteOptions, Theme } from "@mui/material";

export function isDarkTheme(theme : {palette?: Palette | PaletteOptions}) : boolean {
    return theme.palette?.mode == "dark";
}

export function isDarkThemeOptions(theme : {mode: PaletteMode}) : boolean {
    return theme.mode == "dark";
}