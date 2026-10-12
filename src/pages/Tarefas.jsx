import { useState } from 'react';
import ItemTarefa from '../components/ItemTarefa';

function Tarefas({ tarefas, onAdicionar, onRemover }) {
  const [texto, setTexto] = useState('');

  function adicionar() {
    if (texto.trim() === '') return;
    onAdicionar(texto);
    setTexto('');
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
    <div>
      <h1 className="mb-4">Minhas Tarefas</h1>
      <div className="input-group mb-3">
        <input
          className="form-control"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button className="btn btn-primary" onClick={adicionar}>
          Adicionar
        </button>
      </div>
      <ul className="list-group">
        {tarefas.map((tarefa) => (
          <ItemTarefa key={tarefa.id} tarefa={tarefa}
            onRemover={onRemover}
            onEditar={editar}/>
        ))}
      </ul>
    </div>
  );
}

export default Tarefas;
