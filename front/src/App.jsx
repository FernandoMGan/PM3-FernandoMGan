// File C:\Home\Developing\PM3-FernandoMGan\front\src\App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarIII from './views/NavBarIII';
import Home from './views/Home';
import LoguinSingIn from './views/LoguinSignIn'
import LoguinSingUp from './views/LoguinSignUp'
import LoguinSingCall from './views/LoguinSignCall'

const App = () => {
  return (
    <Router>
      <div>
        <NavBarIII />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<LoguinSingIn />} />
          <Route path="/signup" element={<LoguinSingUp />} />
          <Route path="/signcall" element={<LoguinSingCall />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;