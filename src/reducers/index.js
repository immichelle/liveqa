import {combineReducers} from 'redux';
import sessionReducer from './SessionsReducer';

export default combineReducers({
    sessions: sessionReducer
})