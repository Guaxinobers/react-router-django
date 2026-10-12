import { Link } from 'react-router';

function NaoEncontrada() {
  return (
    <div>
      <h1 className="mb-4">404 - Página não encontrada</h1>
      <Link to="/">Voltar para o início</Link>
    </div>
  );
}

export default NaoEncontrada;
