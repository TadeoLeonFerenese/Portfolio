import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../assets/Logo.png';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.staticBoard}>
      
      <div className={styles.boardHeader}>
          <img src={logo} alt="Portfolio Logo" className={styles.logoImage} />
      </div>

      <div className={styles.divider} />

      <div className={styles.linksContainer}>
          <Link to="/" className={`${styles.menuBtn} ${location.pathname === '/' ? styles.active : ''}`}>
              Dashboard
          </Link>
          <Link to="/projects" className={`${styles.menuBtn} ${location.pathname === '/projects' ? styles.active : ''}`}>
              Inventory
          </Link>
          <Link to="/contact" className={`${styles.menuBtn} ${location.pathname === '/contact' ? styles.active : ''}`}>
              Contact
          </Link>
      </div>

    </nav>
  );
};

export default Navigation;
