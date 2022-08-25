// A Redux Slice is a collection of reducer logic and actions for a single feature of our app.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// createAsyncThunk is a function so that we can use asynchronous data
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  console.log(user)
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
})

export default authSlice.reducer
