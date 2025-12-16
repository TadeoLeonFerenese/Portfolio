import PropTypes from 'prop-types';
import InventorySlot from './InventorySlot';
import styles from './ProjectGrid.module.css';

const ProjectGrid = ({ projects }) => {
  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.gridHeader}>Legendary Artifacts</div>
      <div className={styles.grid}>
        {projects.map(project => (
          <InventorySlot key={project.id} project={project} />
        ))}
        {/* Fill with empty slots for aesthetics if needed */}
        {[...Array(Math.max(0, 20 - projects.length))].map((_, i) => (
             <div key={`empty-${i}`} className={styles.emptySlot} />
        ))}
      </div>
    </div>
  );
};

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectGrid;
