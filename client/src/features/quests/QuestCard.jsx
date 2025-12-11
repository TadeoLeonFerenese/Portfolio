import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './QuestCard.module.css';

const QuestCard = ({ project }) => {
    return (
        <motion.div 
            className={clsx(styles.card, project.is_featured && styles.epic)}
            whileHover={{ scale: 1.02, rotate: 1 }}
        >
            <div className={styles.nail}></div>
            
            <div className={styles.header}>
                <span className={styles.wanted}>WANTED</span>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.reward}>REWARD: {project.is_featured ? '1000 XP' : '500 XP'}</span>
            </div>

            <div className={styles.body}>
                <div className={styles.imageContainer}>
                    {project.image_url ? (
                        <img src={project.image_url} alt={project.title} className={styles.image} />
                    ) : (
                        <div className={styles.imagePlaceholder}>?</div>
                    )}
                </div>
                
                <p className={styles.description}>
                    {project.description}
                </p>

                <div className={styles.tags}>
                    {project.tags?.map((tag, i) => (
                        <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className={styles.footer}>
                <a href={project.link_demo || '#'} className={styles.button}>ACCEPT QUEST</a>
            </div>

            {project.is_featured && <div className={styles.seal}>EPIC</div>}
        </motion.div>
    );
};

export default QuestCard;
