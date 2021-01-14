import { combineReducers } from 'redux';

//Reducers
import { cepReducer } from './cepReducer';

export const allReducers = combineReducers({
    cepList: cepReducer
});