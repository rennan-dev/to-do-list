import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const nome = new URLSearchParams(location.search).get('nome');

  return (
    <div>
      <h1>Bem-vindo, {nome}!</h1>
    </div>
  );
}

export default Home;