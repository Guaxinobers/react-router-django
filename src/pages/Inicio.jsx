import { Link } from 'react-router';

function Inicio({ total }) {
  return (
    <div>
      <h1 className="mb-4">Bem-vindo!</h1>
      <p>Você tem {total} tarefa(s) cadastrada(s).</p>
      <Link className="btn btn-primary" to="/tarefas">Ver minhas tarefas</Link>
    </div>
  );
}

export default Inicio;
