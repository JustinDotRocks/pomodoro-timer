import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        value: 1500
    },
    reducers: {
        timerCountdown: (state) => {
            state.value -= 1
        }
    }
});

export const selectTime = state => state.timer.value;

export const {  timerCountdown } = timerSlice.actions;

export default timerSlice.reducer;

