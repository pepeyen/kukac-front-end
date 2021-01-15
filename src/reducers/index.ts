import { combineReducers } from 'redux';

//Reducers
import { cepReducer } from './cepReducer';
import { cepCounterReducer } from './cepCounterReducer';

export const allReducers = combineReducers({
    cepList: cepReducer,
    cepCounter: cepCounterReducer
});