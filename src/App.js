import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import {Depositar} from './components/Depositar';
import {Retirar} from './components/Retirar';

import {connect} from 'react-redux';
import {botaoDepositaValor, botaoRetirarValor} from './actions';
import {bindActionCreators} from 'redux';
import {Home} from './components/Home';

import './App.css';

const mapStateToProps = store => ({
    saldo: store.contador.saldo
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {botaoDepositaValor, botaoRetirarValor}, dispatch
);

function App(props) {
    return (
        <Router>
            <div className="App">
                <h1>EAD React-Router com Redux</h1>
                <h3>Saldo:{props.saldo}</h3>
                <Link to="/depositar">Depositar</Link> |
                <Link to="/retirar">Retirar</Link> |
                <Link to="/">Home</Link>
                <Routes>
                    <Route exact path="/" element={<Home saldo={props.saldo}/>}/>
                    <Route path="/depositar" element={<Depositar depositar={() => props.botaoDepositaValor()}/>}/>
                    <Route path="/retirar" element={<Retirar retirar={() => props.botaoRetirarValor()}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

// <div>
//     <h1>EAD React Router com Redux</h1>
//     <p>Saldo atual: {props.contagem}</p>
//     <br/>
//     <button onClick={() => props.botaoIncrementa()}>Incrementar Contagem</button>
//     <br/>
//     {props.mensagem}
//     <br/>
//     <button onClick={() => props.botaoMensagem('Nova mensagem via Redux')}>Atualizar Mensagem</button>
// </div>;

export default connect(mapStateToProps, mapDispatchToProps)(App);