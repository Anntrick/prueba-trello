import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list",
    initialState: {
        input: "",
        list: []
    },
    reducers: {
        changeInput: (state, action) => {
            state.input = action.payload
        },
        addTask: (state, action) => {
            state.list.push(action.payload)
        }
    }
})

export const { changeInput, addTask } = listSlice.actions

export const selectInput = (state) => state.list.input
export const selectList = (state) => state.list.list

export default listSlice.reducer