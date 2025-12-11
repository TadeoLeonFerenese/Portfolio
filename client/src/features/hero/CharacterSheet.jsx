import { motion } from 'framer-motion';
import styles from './CharacterSheet.module.css';
import tadeoImg from '../../assets/Tadeo.jpg';

const CharacterSheet = () => {
    return (
        <section className={styles.container}>
            <motion.div 
                className={styles.sheet}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header: Avatar & Name */}
                <div className={styles.header}>
                    <div className={styles.avatarContainer}>
                         {/* Placeholder Avatar - User can replace later */}
                        <div className={styles.avatar}>
                            <img src={tadeoImg} alt="Tadeo Avatar" className={styles.avatarImg} />
                        </div>
                        <div className={styles.levelBadge}>30</div>
                    </div>
                    
                    <div className={styles.info}>
                        <h1 className={styles.name}>Tadeo L. Ferense</h1>
                        <h2 className={styles.class}>Archmage of Code</h2>
                        <p className={styles.bio}>
                            "Keeper of the Laravel Sanctuaries and wielder of the React Arcana. 
                            Turning chaos into structured mana since 2015."
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className={styles.stats}>
                    <StatBar label="INT (Backend)" value={95} color="#3498db" />
                    <StatBar label="AGI (Frontend)" value={85} color="#58d68d" />
                    <StatBar label="STA (Debugging)" value={100} color="#d7dbdd" />
                    <StatBar label="WIS (Architecture)" value={90} color="var(--accent-gold)" />
                </div>
            </motion.div>
        </section>
    );
};

const StatBar = ({ label, value, color }) => (
    <div className={styles.statRow}>
        <span className={styles.statLabel}>{label}</span>
        <div className={styles.barContainer}>
            <motion.div 
                className={styles.barFill} 
                style={{ backgroundColor: color }}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ delay: 0.5, duration: 1 }}
            />
        </div>
        <span className={styles.statValue}>{value}</span>
    </div>
);

export default CharacterSheet;
