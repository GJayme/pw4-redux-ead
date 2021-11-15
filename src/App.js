import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/Home';
import { Contato } from './components/Contato';
import { Sobre } from './components/Sobre';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <h3>Exemplos com React Router</h3>
                <Link to="/">Home</Link> |
                <Link to="/sobre">Sobre</Link> |
                <Link to="contato">Contato</Link> |

                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/sobre" element={<Sobre/>} />
                    <Route path="/contato" element={<Contato/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
