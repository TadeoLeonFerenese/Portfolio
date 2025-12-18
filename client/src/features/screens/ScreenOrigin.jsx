import { motion } from 'framer-motion';
import CharacterSheet from '../hero/CharacterSheet';
import Spellbook from '../skills/Spellbook';
import JobHistory from '../experience/JobHistory'; // Assuming it exists, verified in previous step
import styles from './ScreenOrigin.module.css';

const ScreenOrigin = ({ onBack }) => {
    return (
        <motion.div 
            className={styles.screenContainer}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5 }}
        >
            <button className={styles.backButton} onClick={onBack}>✖ Close Tome</button>
            
            <div className={styles.content}>
                <CharacterSheet />
                <div className={styles.sectionSpacer}>
                    <Spellbook />
                </div>
                <div className={styles.sectionSpacer}>
                    <JobHistory />
                </div>
            </div>
        </motion.div>
    );
};

export default ScreenOrigin;
