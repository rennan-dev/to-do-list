import React, { useState } from 'react';
import './App.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();

    const response = await fetch('', {
      method: 'POST',
      body: new URLSearchParams({
        nome,
        email,
        senha,
        confirmar_senha: confirmarSenha,
      }),
    });

    const data = await response.json();
    setMensagem(data.message);
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <input type="password" placeholder="Confirmar Senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p className={`mensagem ${mensagem === 'Cadastro bem-sucedido' ? 'sucesso' : ''}`}>{mensagem}</p>}
      <p>Já tem conta? <a href="/login">Faça login</a></p>
    </div>
  );
}

export default Cadastro;