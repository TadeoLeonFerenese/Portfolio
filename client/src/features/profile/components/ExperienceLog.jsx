import styles from './ExperienceLog.module.css';
import { profileData } from '../../../data/profile';

const ExperienceLog = () => {
    const { about } = profileData;

    return (
        <div className={styles.logContainer}>
            <h2 className={styles.sectionTitle}>Quest Log (Experience)</h2>
            
            {about.history.map((job, index) => {
                const isCurrent = job.date.toLowerCase().includes('presente') || job.date.toLowerCase().includes('present');
                
                return (
                    <div key={index} className={`${styles.questItem} ${isCurrent ? styles.activeQuest : styles.completedQuest}`}>
                        <div className={styles.questIcon}>
                            {isCurrent ? '!' : '✓'}
                        </div>
                        <div className={styles.questContent}>
                            <div className={styles.questHeader}>
                                <div>
                                    <h3 className={styles.questTitle}>{job.role}</h3>
                                    <span style={{color: '#d4af37', fontSize: '0.9rem'}}>{job.company}</span>
                                </div>
                                <span className={styles.questMeta}>{job.date}</span>
                            </div>
                            <p className={styles.questDesc}>
                                {job.desc}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExperienceLog;
