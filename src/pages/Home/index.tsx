import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Bem vindo a API de Legend of Zelda</h1>
      <p>Explore o mundo dos jogos Zelda!</p>
      <Link to="/jogos">Veja os Jogos</Link>
    </div>
  );
};

export default Home;