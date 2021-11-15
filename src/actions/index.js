import {INCREMENTA_CONTAGEM, ATUALIZA_MENSAGEM} from './actionsTypes';

const botaoIncrementa = () => ({
    type: INCREMENTA_CONTAGEM
});

const botaoMensagem = (valor) => ({
    type: ATUALIZA_MENSAGEM,
    novoValor: valor
});

export {botaoIncrementa, botaoMensagem};