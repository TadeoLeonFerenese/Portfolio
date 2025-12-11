import { useProjects } from '../../hooks/useProjects';
import QuestCard from './QuestCard';
import styles from './QuestBoard.module.css';

const QuestBoard = () => {
    const { projects, loading, error } = useProjects();

    return (
        <section className={styles.boardContainer}>
            <h2 className={styles.boardTitle}>Notice Board</h2>
            
            {loading && <div className={styles.loading}>Summoning quests...</div>}
            
            <div className={styles.board}>
                {projects.map((project) => (
                    <QuestCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default QuestBoard;
