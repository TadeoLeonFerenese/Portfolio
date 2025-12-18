import { motion } from 'framer-motion';
import QuestBoard from '../quests/QuestBoard';
import styles from './ScreenProjects.module.css';

const ScreenProjects = ({ onBack }) => {
    return (
        <motion.div 
            className={styles.screenContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
        >
            <button className={styles.backButton} onClick={onBack}>✖ Return to Map</button>
            <div className={styles.content}>
                <QuestBoard />
            </div>
        </motion.div>
    );
};

export default ScreenProjects;
