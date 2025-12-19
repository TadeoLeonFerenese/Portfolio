import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/Logo.png';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`${styles.header} ${!isHomePage ? styles.logoOnly : ''}`}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Portfolio" className={styles.logo} />
      </div>
      {isHomePage && <h1 className={styles.headerTitle}>Forge Your Legend</h1>}
    </header>
  );
};

export default Header;
