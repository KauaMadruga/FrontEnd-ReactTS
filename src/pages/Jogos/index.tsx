import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import GameCard from '../../components/Carta/index';

// Define a estrutura do objeto Game
interface Game {
  id: string;
  name: string;
  description: string;
  developer: string;
  publisher: string;
  released_date: string;
}

const Jogos = () => {
  // Estados para armazenar os jogos e o texto de busca
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // useEffect para buscar os dados da API quando o componente for montado
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://zelda.fanapis.com/api/games?limit=100');
        setGames(response.data.data);
      } catch {
        console.error('Erro ao carregar os jogos.');
      }
    };
  
    fetchGames();
  },[]); 

  // Filtra os jogos com base no texto de busca inserido
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
            <GameCard
              key={game.id}
              name={game.name}
              description={game.description}
              developer={game.developer}
              publisher={game.publisher}
              released_date={game.released_date}
            />
          ))
        ) : (
          <p>Nenhum jogo encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Jogos;
