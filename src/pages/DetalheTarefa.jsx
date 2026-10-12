import { useParams, useNavigate, Link } from 'react-router';

function DetalheTarefa({ tarefas, onRemover }) {
  // useParams lê o :id da URL (sempre como texto)
  const { id } = useParams();
  // useNavigate permite mudar de página pelo código
  const navigate = useNavigate();

  const tarefa = tarefas.find((t) => t.id === Number(id));

  if (!tarefa) {
    return (
      <div>
        <h1 className="mb-4">Tarefa não encontrada</h1>
        <Link to="/tarefas">Voltar para a lista</Link>
      </div>
    );
  }

  function remover() {
    onRemover(tarefa.id);
    navigate('/tarefas');
  }

  return (
    <div>
      <h1 className="mb-4">{tarefa.texto}</h1>
      <p>Criada em: {new Date(tarefa.id).toLocaleString('pt-BR')}</p>
      <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>
        Voltar
      </button>
      <button className="btn btn-danger" onClick={remover}>
        Remover
      </button>
    </div>
  );
}

export default DetalheTarefa;
