import styles from './TalentTree.module.css';
import { profileData } from '../../../data/profile';
import sectionStyles from './ExperienceLog.module.css'; // Reusing title style

const TalentTree = () => {
    const { skills } = profileData;

    return (
        <div className={styles.treeContainer}>
            <h2 className={sectionStyles.sectionTitle}>Talent Tree (Skills)</h2>
            
            <div className={styles.categoryTitle}>Backend Arts</div>
            <div className={styles.skillGrid}>
                {skills.backend.map((skill, i) => (
                    <div key={i} className={styles.talentNode}>{skill}</div>
                ))}
            </div>

            <div className={styles.categoryTitle}>Frontend Mastery</div>
            <div className={styles.skillGrid}>
                {skills.frontend.map((skill, i) => (
                    <div key={i} className={styles.talentNode}>{skill}</div>
                ))}
            </div>

            <div className={styles.categoryTitle}>Infrastructure & Tools</div>
            <div className={styles.skillGrid}>
                {skills.infra.map((skill, i) => (
                    <div key={i} className={styles.talentNode}>{skill}</div>
                ))}
            </div>
            
             <div className={styles.categoryTitle}>Arcane Knowledge (Data)</div>
            <div className={styles.skillGrid}>
                {skills.data.map((skill, i) => (
                    <div key={i} className={styles.talentNode}>{skill}</div>
                ))}
            </div>
        </div>
    );
};

export default TalentTree;
