import { createSlice } from '@reduxjs/toolkit';

const pomodoro = 25;

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
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
    
});

export const selectTime = state => state.timer.value;

export const { increment, decrement, incrementByAmount } = timerSlice.actions;

export default timerSlice.reducer;