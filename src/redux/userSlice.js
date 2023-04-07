import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading= true;
        },
        loginSuccess: (state, action) => {
            state.loading= false;
            state.currentUser= action.payload.others;
            localStorage.setItem('access_token', action?.payload?.token);
        },
        loginFailure: (state) => {
            state.loading= false;
            state.error= true;
        },
        logout: (state) => {
            state.currentUser= null;
            state.loading= false;
            state.error= false;
            localStorage.clear();
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;