import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Header';
import Home from './pages/Home';
import Jogos from './pages/Jogos';
import Characters from './pages/Personagens';
import './index.css';


const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/personagens" element={<Characters />} />
      </Routes>
    </Router>
  </React.StrictMode>
);