import { motion } from 'framer-motion';
import styles from './ScreenContact.module.css';

const ScreenContact = ({ onBack }) => {
    return (
        <motion.div 
            className={styles.screenContainer}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.5 }}
        >
            <button className={styles.backButton} onClick={onBack}>✖ Discard Message</button>
            
            <div className={styles.parchment}>
                <h2 className={styles.title}>Send a Raven</h2>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.field}>
                        <label>Your Name (Adventurer)</label>
                        <input type="text" placeholder="Sir John of code..." />
                    </div>
                    <div className={styles.field}>
                        <label>Guild / Faction (Email)</label>
                        <input type="email" placeholder="john@guild.com" />
                    </div>
                    <div className={styles.field}>
                        <label>The Message</label>
                        <textarea rows="6" placeholder="I have a quest for you..."></textarea>
                    </div>
                    <button type="submit" className={styles.sendButton}>Send Raven</button>
                </form>
            </div>
        </motion.div>
    );
};

export default ScreenContact;
