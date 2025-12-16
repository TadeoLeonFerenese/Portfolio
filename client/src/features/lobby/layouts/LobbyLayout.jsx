import { useState, useRef, useEffect } from 'react';
import styles from './LobbyLayout.module.css';
import ServerScroll from '../components/ServerScroll';
import RainEffect from '../components/RainEffect';

const LobbyLayout = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false); // Default to sound ON (autoplaying) -> Change to true if want silent start
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.muted = isMuted;
        // Ensure play is attempted (browser autopilot policy might block unmuted)
        if (!isMuted) {
            audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
        }
    }
  }, [isMuted]);

  return (
    <div className={styles.lobbyContainer}>
        <div className={styles.ambientParticles} />
        <RainEffect intensity={80} />
        
        {/* Ambient Sound Controller */}
        <button 
            className={styles.soundToggleBtn} 
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute Ambient" : "Mute Ambient"}
        >
            {isMuted ? "🔇" : "🔊"}
        </button>

        <audio ref={audioRef} autoPlay loop hidden>
            <source src="/assets/storm.mp3" type="audio/mpeg" />
            <source src="/assets/storm.ogg" type="audio/ogg" />
        </audio>
        
        {/* Main Content Area */}
        <div className={styles.boardGrid}>
            {children} 
        </div>
    </div>
  );
};

export default LobbyLayout;
