import styles from './HeroProfile.module.css';
import { profileData } from '../../../data/profile';

const HeroProfile = () => {
    const { hero, pii } = profileData;

    return (
        <div className={styles.profileContainer}>
            {/* Avatar Section */}
            <div className={styles.avatarWrapper}>
                <div className={styles.avatarFrame} />
                <div 
                    className={styles.avatarImage} 
                    style={{ backgroundImage: `url(${hero.avatarUrl})` }} 
                />
                
                {/* Title badge below (e.g. "My Photo") */}
                <div className={styles.avatarNameTag}>
                    Player 1
                </div>
            </div>
            
            {/* Right Side Plaque */}
            <div className={styles.infoPlaque}>
                <h1 className={styles.heroName}>{pii.shortName}</h1>
                <span className={styles.heroClass}>{hero.class} | {hero.specialization}</span>
            </div>
        </div>
    );
};

export default HeroProfile;
