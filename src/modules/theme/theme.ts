import { Theme, ThemeOptions } from "@mui/material/styles/createTheme";

export const darkTheme: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#7285e8",
        },
        secondary: {
            main: "#f50057",
        },
    },
};

// export const lightTheme: ThemeOptions = {
//     ...darkTheme,
//     palette: {
//         ...darkTheme.palette,
//         mode: "light",
//     },
// };

export const lightTheme: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#3f51b5",
        },
        secondary: {
            main: "#f50057",
        },
    },
};

export interface IHasTheme {
    theme: Theme;
}
