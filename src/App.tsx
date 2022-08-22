import React, { useState } from "react";

// Store Imports
import { Provider } from "react-redux";
import { store, useAppSelector } from "./store";
import { LoaderView } from "./modules";

// Router
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Theme
import {
    Box,
    createTheme,
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import { selectTheme } from "./modules/theme/slice";
import { LocalizationProvider } from "@mui/x-date-pickers";

// Localization
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MainPage, MainPath } from "./pages";

function ManagedApp() {
    return (
        <LoaderView>
            <Routes>
                <Route path={MainPath} element={<MainPage />} />
            </Routes>
        </LoaderView>
    );
}

function LocalizedApp({ children }: React.PropsWithChildren) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            {children}
        </LocalizationProvider>
    );
}

function ThemedApp({ children }: React.PropsWithChildren) {
    const options = useAppSelector(selectTheme);
    let theme = createTheme(options);

    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                {children}
            </StyledEngineProvider>
        </ThemeProvider>
    );
}

function RoutedApp({ children }: React.PropsWithChildren) {
    return <Router>{children}</Router>;
}

function StoreApp({ children }: React.PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
}

function App() {
    return (
        <StoreApp>
            <RoutedApp>
                <ThemedApp>
                    <LocalizedApp>
                        <ManagedApp />
                    </LocalizedApp>
                </ThemedApp>
            </RoutedApp>
        </StoreApp>
    );
}

export default App;
