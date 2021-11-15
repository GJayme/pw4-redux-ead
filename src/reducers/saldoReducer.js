import {RETIRAR_VALOR, DEPOSITAR_VALOR} from '../actions/actionsTypes';

const stateInicial = {
    saldo: 0
};

export const saldoReducer = (state = stateInicial, action) => {
    switch (action.type) {
        case(DEPOSITAR_VALOR):
            return {
                ...state,
                saldo: state.saldo + 1
            };
        case (RETIRAR_VALOR):
            return {
                ...state,
                saldo: state.saldo - 1
            };
        default:
            return state;
    }
};