// File: C:\Home\Developing\PM3-FernandoMGan\front\src\App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom'; // Importa Routes en lugar de Routers
import NavBar from './views/NavBar';
import Home from './views/Home';
import LoguinSingIn from './views/LoguinSingIn';
import LoguinSingUp from './views/LoguinSingUp'; // Importa el componente LoguinSingUp
import MailerEmail from './views/MailerEmail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { useSelector } from "react-redux"

function App() {
  const handleMoveTo = () => {
    alert(`Testing move to log in`);
  };

  return (
    <div className='root'>
      <NavBar handleMoveTo={handleMoveTo}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/signin" element={<LoguinSingIn />} />
          <Route path="/signup" element={<LoguinSingUp />} /> 
          <Route path="/contacto" element={<MailerEmail />} /> 
         
        </Routes>
      </Router>
      <footer className="container footer">
        <p className="footer-text">Todos los derechos reservados a <span className="highlighted-text">PT19A Fernando Martin Gan, Soy Henry</span></p>
      </footer>
    </div>
  );
}

export default App;