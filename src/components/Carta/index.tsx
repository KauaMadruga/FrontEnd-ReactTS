  // Define a interface que especifica as propriedades esperadas pelo componente GameCard
  interface GameCardProps {
    name: string;
    description: string;
    developer: string;
    publisher: string;
    released_date: string;
  }

  // Componente funcional que exibe informações de um jogo
  const GameCard = ({ name, description, developer, publisher, released_date }: GameCardProps) => {
    return (
      <div className="game-card">
        <h2>{name}</h2>
        <p><strong>Descrição:</strong> {description || 'Descrição não disponível'}</p>
        <p><strong>Desenvolvedora:</strong> {developer || 'Desconhecida'}</p>
        <p><strong>Publicadora:</strong> {publisher || 'Desconhecida'}</p>
        <p><strong>Data de Lançamento:</strong> {released_date || 'Não informada'}</p>
      </div>
    );
  };

  export default GameCard;
