import { createSlice } from "@reduxjs/toolkit";

export const authStateSlice = createSlice({
    name: "auth",
    initialState: false,
    reducers: {
        removeAuth: (state) => {

            state = false
            return state
        },
        setAuthAsTrue: (state) => {

            state = true
            return state
        }
    }
})

export const { removeAuth, setAuthAsTrue } = authStateSlice.actions

