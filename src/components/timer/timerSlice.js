import { createSlice } from '@reduxjs/toolkit';

const pomodoro = 1500;

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        value: pomodoro
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        timerCountdown: (state, action) => {
            state.value += action.payload
        }
    }
    
});

export const selectTime = state => state.timer.value;

export const { increment, decrement, timerCountdown } = timerSlice.actions;

export default timerSlice.reducer;