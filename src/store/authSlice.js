import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = false;
            state.userData = action.payload
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null
        }
    }
})

export const authStatus = (state) => state.auth.status
export const authUserData = (state) => state.auth.userData
export default authSlice.reducer;
export const { login, logout } = authSlice.actions