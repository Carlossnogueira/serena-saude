
import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';

import Home from './Pages/Public/Home';
import Login from './Pages/Auth/Login';
import Agendamento from './Pages/Agendamento/Agendamento';
import Cadastro from './Pages/Auth/Cadastro';

function Rotas(){
  return (
    <Routes>
 
     <Route path="/" element={<Home/>} />
     
    <Route path="/Login" element={<Login/>} />
    <Route path="/Cadastro" element={<Cadastro/>} />
    <Route path='/Agendamento' element={<Agendamento/>} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
    <Rotas/>
    </Router>
  )
}

export default App
