import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
    <nav>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
        Sobre
      </Link>
    </nav>
  </header>
);

export default Header;