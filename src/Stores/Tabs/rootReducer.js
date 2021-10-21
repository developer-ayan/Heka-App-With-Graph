import { combineReducers } from 'redux';
import markerReducer from './marketReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
    markerReducer,
    signupReducer,
})

export default rootReducer