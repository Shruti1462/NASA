import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="nav" style={styles.navbar}>
      <div className="nav-logo" style={styles.logo}>NASA</div>
      <ul className="nav-menu" style={styles.links}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li className="nav-contact"><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
      <SearchBar />
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'black',
    color: 'turquoise',
  },
  logo: {
    fontSize: '24px',
  },
  links: {
    display: 'flex',
    gap: '20px',
    listStyleType: 'none', 
    padding: 0,
    margin: 0,
  },
  link: {
    color: 'turquoise',
    textDecoration: 'none',
  }
};

export default Navbar;