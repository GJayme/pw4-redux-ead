import {combineReducers} from 'redux';
import {contadorReducer} from './contadorReducer';

export const Reducers = combineReducers({
    contador: contadorReducer
});