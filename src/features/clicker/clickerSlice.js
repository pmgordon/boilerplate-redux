import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
}

export const clickerSlice = createSlice({
    name: 'clicker',
    initialState,
    reducers: {
        increment: (state) => {
          state.value += 1;
        },
    },
});

export const { increment } = clickerSlice.actions;

export const selectCount = (state) => state.clicker.value;

export default clickerSlice.reducer;