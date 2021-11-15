import {ATUALIZA_MENSAGEM, INCREMENTA_CONTAGEM} from '../actions/actionsTypes';

const stateInicial = {
    contagem: 0,
    mensagem: 'bem vindo'
};

export const contadorReducer = (state = stateInicial, action) => {
    //com base na action, o reducer deve retornar um NOVO objeto state
    switch (action.type) {
        case(INCREMENTA_CONTAGEM):
            return {
                ...state,
                contagem: state.contagem + 1
            };
        case (ATUALIZA_MENSAGEM):
            return {
                ...state,
                mensagem: action.novoValor
            };
        default:
            return state;
    }
};