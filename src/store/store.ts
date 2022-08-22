import { createHashHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../modules/loader/slice";
import globalReducer from "../modules/global/slice";
import themeReducer from "../modules/theme/slice";

export const history = createHashHistory();
export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        global: globalReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
