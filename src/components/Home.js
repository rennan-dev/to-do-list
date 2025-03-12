import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const nome = new URLSearchParams(location.search).get('nome');

  const handleLogout = async () => {
    const response = await fetch('', {
      method: 'GET',
    });

    if(response.ok) {
      navigate('/login');
    }
  };

  return (
    <div className="container">
      <h1>Bem-vindo, {nome}!</h1>
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;