import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
import Nav from './components/Navegador/index.tsx';
import Jogos from './pages/Jogos/index.tsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);