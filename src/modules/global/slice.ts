import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Types
export enum GlobalCacheState {
    Nothing,
    ServerNotAvailable,
    ServerNotReady,
    Connected,
    Complete,
}

export interface GlobalState {
    cacheState: GlobalCacheState;
    isNavDrawerOpen: boolean;
    isSettingsDrawerOpen: boolean;
}

const initialState = {
    cacheState: GlobalCacheState.Nothing,
    isNavDrawerOpen: false,
    isSettingsDrawerOpen: false,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setCacheState: (state, action: PayloadAction<GlobalCacheState>) => {
            state.cacheState = action.payload;
        },
        setNavDrawer: (state, action: PayloadAction<boolean>) => {
            state.isNavDrawerOpen = action.payload;
        },
        setSettingsDrawer: (state, action: PayloadAction<boolean>) => {
            state.isSettingsDrawerOpen = action.payload;
        },
    },
});

export const { setCacheState, setNavDrawer, setSettingsDrawer } =
    globalSlice.actions;

export default globalSlice.reducer;
