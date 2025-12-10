import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

const ProjectGrid = ({ projects }) => {
  return (
    <div className={styles.grid}>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectGrid;
