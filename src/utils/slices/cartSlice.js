import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Vanilla(older) redux => Don't mutate state, returing was mandatory
    // const newState = [...state]
    // newState.items.push(action.payload)

    // newer way RTK, RTK uses immer bts
    // mutating the states
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    // RTK says either mutate the state or return a new state

    clearCart: (state) => {
      state.items.length = 0;
      // return {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
