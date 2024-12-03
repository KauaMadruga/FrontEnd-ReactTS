import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Nav: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jogos">Jogos</Link>
        </li>
        <li>
          <Link to="/Personagens">Personagens</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;