import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import timerReducer from '../components/timer/timerSlice';
import postsReducer from '../components/posts/postsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    timer: timerReducer,
    posts: postsReducer
  }
});