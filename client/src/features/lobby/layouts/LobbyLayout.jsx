import { useState, useRef, useEffect } from 'react';
import styles from './LobbyLayout.module.css';
import ServerScroll from '../components/ServerScroll';
// import RainEffect from '../components/RainEffect';
import stormSound from '../../../assets/sonidos/lluvia.mp3';
import rainVideo from '../../../assets/lluvia.mp4';

const LobbyLayout = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true); // Start with sound OFF
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Handle Audio Logic in one robust effect
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;

    const attemptPlay = async () => {
        try {
            if (!isMuted) {
                await audio.play();
                console.log("Audio playing");
            } else {
                audio.pause();
            }
        } catch (error) {
            console.log("Autoplay blocked. Waiting for interaction.");
            // Silent fallback: Catch the first CLICK or KEY interaction
            // Note: 'mousemove' is NOT a trusted event for audio, so we must avoid it as it often breaks the logic.
            const forceStart = async () => {
                try {
                    await audio.play();
                    console.log("Audio started via interaction");
                    // Only remove listeners IF success
                    document.removeEventListener('click', forceStart);
                    document.removeEventListener('keydown', forceStart);
                } catch (e) {
                    console.log("Interaction failed to start audio (maybe invalid event):", e);
                }
            };

            document.addEventListener('click', forceStart);
            document.addEventListener('keydown', forceStart);
        }
    };

    attemptPlay();
  }, [isMuted]); // Re-run when mute state toggles or mount

  return (
    <div className={styles.lobbyContainer}>
        <div className={styles.ambientParticles} />
        {/* <RainEffect intensity={80} /> */}

         {/* Video de lluvia en bucle */}
        <video 
            className={styles.rainVideo}
            autoPlay 
            loop 
            muted 
            playsInline
        >
        <source src={rainVideo} type="video/mp4" />
      </video>
        
        {/* Ambient Sound Controller */}
        <button 
            className={styles.soundToggleBtn} 
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute Ambient" : "Mute Ambient"}
        >
            <span className={styles.soundIcon} aria-hidden="true">
              {isMuted ? "🔇" : "🔊"}
            </span>
        </button>

        <audio ref={audioRef} autoPlay loop hidden>
            <source src={stormSound} type="audio/mpeg" />
        </audio>
        
        {/* Main Content Area */}
        <div className={styles.boardGrid}>
            {children} 
        </div>
    </div>
  );
};

export default LobbyLayout;
