import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    loading: false,
    error: null
  },
  reducers: {
    increment: (state) => {
      state.loading = true;
      state.count += 1;
      state.error = "Error has been dispatched!";
      // state.loading = false;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  loading,
  error
} = counterSlice.actions;

export default counterSlice.reducer;
