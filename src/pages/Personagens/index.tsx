import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

// Define a interface para o tipo Character
interface Character {
  id: string;
  name: string;
  description: string;
  gender: string | null;
  race: string | null;
}

const Characters = () => {
  // Estado para armazenar os personagens e o texto de busca
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>('');

  // useEffect para buscar dados ao montar o componente
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://zelda.fanapis.com/api/characters?limit=100');
        setCharacters(response.data.data);
      } catch {
        console.error('Erro ao carregar os personagens.');
      }
    };

    fetchCharacters();
  },[]);

  // Filtra os personagens com base no texto de busca
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="characters-page">
      <h1>Personagens de The Legend of Zelda</h1>
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Procure por um personagem..."
        />
      </div>
      <div className="character-list">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <div key={character.id}>
              <h2>{character.name}</h2>
              <p><strong>Descrição:</strong> {character.description || 'Descrição não disponível'}</p>
              <p><strong>Gênero:</strong> {character.gender || 'Desconhecido'}</p>
              <p><strong>Raça:</strong> {character.race || 'Desconhecida'}</p>
            </div>
          ))
        ) : (
          <p>Nenhum personagem encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Characters;
