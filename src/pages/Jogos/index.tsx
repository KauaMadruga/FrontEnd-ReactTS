import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

interface Game {
  id: string;
  name: string;
  description: string;
  developer: string;
  publisher: string;
  released_date: string;
}

const Jogos: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://zelda.fanapis.com/api/games?limit=100');
        setGames(response.data.data);
      } catch {
        console.error('Erro ao carregar os jogos.');
      }
    };

    fetchGames();
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="games-page">
      <h1>Jogos de The Legend of Zelda</h1>
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Procure por um jogo..."
        />
      </div>
      <div className="game-list">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div key={game.id} className="game-card">
              <h2>{game.name}</h2>
              <p><strong>Descrição:</strong> {game.description || 'Descrição não disponível'}</p>
              <p><strong>Desenvolvedora:</strong> {game.developer || 'Desconhecida'}</p>
              <p><strong>Publicadora:</strong> {game.publisher || 'Desconhecida'}</p>
              <p><strong>Data de Lançamento:</strong> {game.released_date || 'Não informada'}</p>
            </div>
          ))
        ) : (
          <p>Nenhum jogo encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Jogos;

