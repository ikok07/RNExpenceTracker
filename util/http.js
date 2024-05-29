import axios from "axios";
import {createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";

const url = "https://rnexpensetracker-93e7d-default-rtdb.europe-west1.firebasedatabase.app"

export const fetchExpenses = createAsyncThunk(
    "expenses/fetch",
    async () => {
        try {
            const {data} = await axios.get(`${url}/expenses.jso`)

            const expenses = []
            for (const key in data) {
                const expenseObj = {
                    id: key,
                    amount: data[key].amount,
                    date: data[key].date,
                    description: data[key].description
                }
                expenses.push(expenseObj)
            }
            return expenses
        } catch (err) {
            console.log(`ERROR FETCHING DATA`)
            throw new Error(err.response)
        }
})

export const storeExpense = createAsyncThunk(
    "expenses/store",
    async (expenseData) => {
        try {
            const {data} = await axios.post(`${url}/expenses.json`, expenseData)
            return {...expenseData, id: data.name}
        } catch(err) {
            console.log(`ERROR STORING DATA`)
            throw new Error(err.response)
        }
    })

export const updateExpense = createAsyncThunk("expense/update", async (expenseData) => {
    try {
        await axios.put(`${url}/expenses/${expenseData.id}.json`, expenseData)
        return expenseData
    } catch(err) {
        console.log(`ERROR STORING DATA`)
        return isRejectedWithValue(err.response)
    }
})

export const deleteExpense = createAsyncThunk("expense/delete", async (id) => {
    try {
        await axios.delete(`${url}/expenses/${id}.json`)
        return id
    } catch(err) {
        console.log(`ERROR STORING DATA`)
        throw new Error(err.response)
    }
})