import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Bem-vindo ao mundo de The Legend of Zelda!</h1>
      <p className="p">Como você deseja iniciar a sua jornada?</p>
      <div className="link-container">
        <Link to="/jogos">Veja os Jogos</Link>
        <Link to="/personagens">Veja os Personagens</Link>
      </div>
    </div>
  );
};

export default Home;
