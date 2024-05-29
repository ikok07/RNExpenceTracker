import {createSlice} from "@reduxjs/toolkit";
import {deleteExpense, fetchExpenses, storeExpense, updateExpense} from "../util/http";

const expensesSlice = createSlice({
    name: "expenses",
    initialState: {
        added: [],
        status: "idle",
        error: null
    },
    reducers: {
        clearError: state => {
            state.error = null
            state.status = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExpenses.pending, state => {
                state.status = "loading"
            })
            .addCase(fetchExpenses.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.added = action.payload
            })
            .addCase(fetchExpenses.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.payload
            })
            .addCase(storeExpense.pending, state => {
                state.status = "loading"
            })
            .addCase(storeExpense.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.added.push(action.payload)
            })
            .addCase(storeExpense.rejected,(state, action) => {
                state.status = "failed"
                state.error = action.payload
            })
            .addCase(updateExpense.pending, state => {
                state.status = "loading"
            })
            .addCase(updateExpense.fulfilled, (state, action) => {
                state.status = "succeeded"
                const index = state.added.findIndex(exp => exp.id === action.payload.id)
                state.added[index].date = action.payload.date
                state.added[index].amount = action.payload.amount
                state.added[index].description = action.payload.description
            })
            .addCase(updateExpense.rejected,(state, action) => {
                state.status = "failed"
                state.error = action.payload
            })
            .addCase(deleteExpense.pending, state => {
                state.status = "loading"
            })
            .addCase(deleteExpense.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.added = state.added.filter(exp => exp.id !== action.payload)
            })
            .addCase(deleteExpense.rejected,(state, action) => {
                state.status = "failed"
                state.error = action.payload
            })
    }
})

export const {clearError} = expensesSlice.actions

export default expensesSlice.reducer