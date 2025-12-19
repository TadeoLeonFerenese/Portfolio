import styles from './ContactLayout.module.css';

const ContactLayout = ({ children }) => {
  return (
    <div className={styles.roomContainer}>
        <div className={styles.vignette} />
        
        {/* Partículas mágicas de fondo - cubren toda la página */}
        <div className={styles.particles}>
          {[...Array(30)].map((_, i) => (
            <span key={i} className={styles.particle}></span>
          ))}
        </div>
        
        <div className={styles.deskArea}>
            {children}
        </div>
    </div>
  );
};

export default ContactLayout;
