import { Link } from 'react-router';

function ItemTarefa({ tarefa, onRemover, onEditar}) {
  return (
    <li className="list-group-item d-block justify-content-between align-items-center">
      <Link to={`/tarefas/${tarefa.id}`}>{tarefa.texto}</Link>
       <div className='float-end'>
      <button className="btn btn-warning btn-sm"
          onClick={()=> onEditar(tarefa.id)}>
            Editar
        </button>
      <button className="btn btn-danger btn-sm"
        onClick={() => onRemover(tarefa.id)}>
        X
      </button>
      </div>
    </li>
  );
}

export default ItemTarefa;
