import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Connect</h4>
          <div className={styles.footerLinks}>
            <a href="https://github.com/TadeoLeonFerenese" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} Tadeo Leon Ferense • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
