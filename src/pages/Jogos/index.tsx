import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GenericComponent from '../../components/Generico';
import './index.css';

interface Game {
  name: string;
  description: string;
  released_date: string;
}

const Jogos: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://zelda.fanapis.com/api/games?limit=5');
        setGames(response.data.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="games-page">
      <h1>Lista de Jogos Zelda</h1>
      <div className="games-list">
        {games.map((game, index) => (
          <GenericComponent
            key={index}
            title={game.name}
            description={game.description}
            releasedDate={game.released_date}
          />
        ))}
      </div>
    </div>
  );
};

export default Jogos;