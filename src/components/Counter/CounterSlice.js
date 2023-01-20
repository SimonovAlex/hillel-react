import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const fetchData = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/users/" + id)
}  

export const fetchUsersById = createAsyncThunk(
    'users/fetchByIdStatus',
    async ({userId}, thunkAPI) => {
    console.log('userId,thunkAPI ', userId,thunkAPI )
      const response = await fetchData(userId)
      const data = await response.json();
      return data
    }
);


const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        users: [],
    }, 
    reducers: {
        increment: state => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.value += 1
        },
        decrement: state => {
          state.value -= 1
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload
        },
         
      },
      extraReducers: (builder) => {
        console.log('extraReducers', builder);
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUsersById.fulfilled, (state, action) => {
            console.log(action.payload)
          // Add user to the state array
          state.users.push(action.payload)
        })
      },
});

console.log('CounterSlice', CounterSlice);

export const {increment, decrement, incrementByAmount } = CounterSlice.actions;

export default CounterSlice.reducer