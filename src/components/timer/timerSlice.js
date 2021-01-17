import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        value: 5
    },
    reducers: {
        timerCountdown: (state) => {
            state.value -= 1
        },
        timerStop: (state) => {
            state.value = 0
        }
    }
});

export const selectTime = state => state.timer.value;

export const { timerCountdown, timerStop } = timerSlice.actions;

export default timerSlice.reducer;

