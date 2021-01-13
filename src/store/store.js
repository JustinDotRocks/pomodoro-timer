import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../components/counter/counterSlice';
import timerSlice from '../components/timer/timerSlice';

export default configureStore({
  reducer: {
    counter: counterSlice,
    timer: timerSlice
  }
});