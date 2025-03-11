import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<h2>Bem-vindo à nossa aplicação!</h2>} />
      </Routes>
    </Router>
  );
}

export default App;