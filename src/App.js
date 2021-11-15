import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import {Home} from './components/Home';
import {Contato} from './components/Contato';
import {Sobre} from './components/Sobre';

import {connect} from 'react-redux';
import {botaoIncrementa, botaoMensagem} from './actions';
import {bindActionCreators} from 'redux';

// import './App.css';

const mapStateToProps = store => ({
    contagem: store.contador.contagem,
    mensagem: store.contador.mensagem
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {botaoIncrementa, botaoMensagem}, dispatch
);

function App(props) {
    return (

        <div>
            <h1>EAD React Router com Redux</h1>
            <p>Saldo atual: {props.contagem}</p>
            <br/>
            <button onClick={() => props.botaoIncrementa()}>Incrementar Contagem</button>
            <br/>
            {props.mensagem}
            <br/>
            <button onClick={() => props.botaoMensagem('Nova mensagem via Redux')}>Atualizar Mensagem</button>
        </div>
        // <Router>
        //     <div className="App">
        //         <h1>EAD React Router com Redux</h1>
        //         <p>Saldo atual: xxx</p>
        //         <Link to="/">Home</Link> |
        //         <Link to="/sobre">Sobre</Link> |
        //         <Link to="contato">Contato</Link> |
        //
        //         <Routes>
        //             <Route exact path="/" element={<Home/>}/>
        //             <Route path="/sobre" element={<Sobre/>}/>
        //             <Route path="/contato" element={<Contato/>}/>
        //         </Routes>
        //     </div>
        // </Router>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);