import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import logo from '../assets/Logo.png';

const Navigation = () => {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHomePage = location.pathname === '/';

  // Reiniciar animación cada vez que cambia la ruta
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
    setIsMobileMenuOpen(false); // Cerrar menú al cambiar de ruta
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Burger Menu Button - Solo visible en mobile Y NO en home */}
      {!isHomePage && (
        <button 
          className={styles.burgerButton} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      )}

      {/* Navigation Sidebar */}
      <nav 
        key={animationKey} 
        className={`${styles.staticBoard} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''} ${isHomePage ? styles.homePageNav : ''}`}
      >
        
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

      {/* Overlay para cerrar el menú al hacer click fuera - Solo si NO es home */}
      {!isHomePage && isMobileMenuOpen && (
        <div 
          className={styles.mobileOverlay} 
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Navigation;
