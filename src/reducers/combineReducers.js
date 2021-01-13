import { combineReducers } from 'redux';
import { counterSlice } from '../components/counter/counterSlice'

export default combineReducers({
    count: counterSlice,
    
});