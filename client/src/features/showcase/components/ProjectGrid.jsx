import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

const ProjectGrid = ({ projects }) => {
  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.gridHeader}>Legendary Artifacts</div>
      
      {projects.length === 0 ? (
        <div className={styles.emptyState}>
            <p>The vault is empty. No artifacts discovered yet.</p>
        </div>
      ) : (
        <div className={styles.grid}>
            {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      )}
    </div>
  );
};

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectGrid;
