import { useState } from 'react';
import { Navigate } from 'react-router';

// Troque esta função por uma chamada à API (ex.: fetch no Django) quando houver backend
function autenticar(usuario, senha) {
  return usuario === 'admin' && senha === '1234';
}

function Login({ usuario, onEntrar }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  // Se já estiver logado, não mostra a tela de login
  if (usuario) return <Navigate to="/" replace />;

  function entrar(e) {
    e.preventDefault();
    if (autenticar(nome.trim(), senha)) {
      onEntrar(nome.trim());
    } else {
      setErro('Usuário ou senha inválidos.');
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h1 className="mb-4 text-center">Entrar</h1>
      <form onSubmit={entrar}>
        <div className="mb-3">
          <label className="form-label" htmlFor="usuario">Usuário</label>
          <input id="usuario" className="form-control" value={nome}
            onChange={(e) => setNome(e.target.value)} autoFocus />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="senha">Senha</label>
          <input id="senha" type="password" className="form-control" value={senha}
            onChange={(e) => setSenha(e.target.value)} />
        </div>
        {erro && <div className="alert alert-danger">{erro}</div>}
        <button type="submit" className="btn btn-primary w-100">Entrar</button>
        <p className="text-muted small mt-3 text-center">Teste: admin / 1234</p>
      </form>
    </div>
  );
}

export default Login;
