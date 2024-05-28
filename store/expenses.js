import {createSlice} from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: "expenses",
    initialState: {
        added: []
    },
    reducers: {
        addExpense: (state, action) => {
            state.added.push(action.payload)
        },
        updateExpense: (state, action) => {
            const index = state.added.indexOf(action.payload.id)
            state.added[index] = action.payload
        },
        removeExpense: (state, action) => {
            state.added.splice(state.added.indexOf(action.payload.id))
        }
    }
})

export const addExpense = expensesSlice.actions.addExpense
export const updateExpense = expensesSlice.actions.updateExpense
export const removeExpense = expensesSlice.actions.removeExpense
export default expensesSlice.reducer