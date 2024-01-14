import { combineReducers } from 'redux';
import userReducer from '../ducks/auth.duck.js';

const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer;