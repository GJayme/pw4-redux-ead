import {DEPOSITAR_VALOR, RETIRAR_VALOR} from './actionsTypes';

const botaoDepositaValor = () => ({
    type: DEPOSITAR_VALOR
});

const botaoRetirarValor = () => ({
    type: RETIRAR_VALOR
});

export {botaoDepositaValor, botaoRetirarValor};