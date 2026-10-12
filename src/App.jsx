import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Tarefas from './pages/Tarefas';
import DetalheTarefa from './pages/DetalheTarefa';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import NaoEncontrada from './pages/NaoEncontrada';

function App() {
  // O estado fica no App para não ser perdido ao trocar de página
  const [tarefas, setTarefas] = useState([]);

  // Usuário logado (persiste ao recarregar a página)
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario'));

  function entrar(nome) {
    localStorage.setItem('usuario', nome);
    setUsuario(nome);
  }

  function sair() {
    localStorage.removeItem('usuario');
    setUsuario(null);
  }

  function adicionar(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto: texto }]);
  }

  function remover(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function editar(id){
    for (let tarefa of tarefas){
      if (tarefa.id === id){
        tarefa.texto = texto;
        setTexto('');
      }
    }
  }

  return (
    <Routes>
      <Route path="/login" element={<Login usuario={usuario} onEntrar={entrar} />} />
      {/* Sem login, qualquer outra rota redireciona para /login */}
      <Route path="/" element={
        usuario ? <Layout usuario={usuario} onSair={sair} /> : <Navigate to="/login" replace />
      }>
        <Route index element={<Inicio total={tarefas.length} />} />
        <Route path="tarefas" element={
          <Tarefas tarefas={tarefas} onAdicionar={adicionar} onRemover={remover} onEditar={editar}/>
        } />
        <Route path="tarefas/:id" element={
          <DetalheTarefa tarefas={tarefas} onRemover={remover}/>
        } />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;
