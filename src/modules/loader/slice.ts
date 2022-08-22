import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
export interface LoaderState {
    isLoading? : boolean | undefined;
    message? : string | undefined;
};

// State
const initialState : LoaderState = {
    isLoading : false,
    message : "",
};


const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoader: (state, action : PayloadAction<LoaderState|boolean>) => {
            if(typeof action.payload === "boolean"){
                state.isLoading = action.payload;
            }else{
                state.isLoading = action.payload.isLoading ?? state.isLoading;
                state.message = action.payload.message ?? state.message;
            }
        }
    }
});

export const {setLoader} = loaderSlice.actions;


export default loaderSlice.reducer;