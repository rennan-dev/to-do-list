import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('', {
      method: 'POST',
      body: new URLSearchParams({
        email,
        senha,
      }),
    });

    const data = await response.json();
    setMensagem(data.message);

    if(data.message === 'Login bem-sucedido') {
      navigate(`/home?nome=${data.nome}`);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {mensagem && <p className={`mensagem ${mensagem === 'Login bem-sucedido' ? 'sucesso' : ''}`}>{mensagem}</p>}
      <p>Não tem conta? <a href="/cadastro">Cadastre-se</a></p>
    </div>
  );
}

export default Login;