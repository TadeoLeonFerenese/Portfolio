import styles from './LobbyLayout.module.css';
import ServerScroll from '../components/ServerScroll';

const LobbyLayout = ({ children }) => {
  return (
    <div className={styles.lobbyContainer}>
        <div className={styles.ambientParticles} />
        
        {/* Main Content Area */}
        <div className={styles.boardGrid}>
            {children} 
        </div>
    </div>
  );
};

export default LobbyLayout;
