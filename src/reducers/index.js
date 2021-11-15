import {combineReducers} from 'redux';
import {saldoReducer} from './saldoReducer';

export const Reducers = combineReducers({
    contador: saldoReducer
});