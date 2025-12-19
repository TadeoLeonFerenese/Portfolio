import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.questScroll}>
      {/* Quest Marker */}
      <div className={styles.questMarker}>!</div>
      
      {/* Legendary Badge */}
      {project.is_featured && (
        <div className={styles.legendaryBadge}>Legendary</div>
      )}

      {/* Quest Title */}
      <h3 className={styles.questTitle}>{project.title}</h3>

      {/* Quest Image/Preview */}
      {project.image_url && (
        <div className={styles.questImage}>
          <img src={project.image_url} alt={project.title} />
        </div>
      )}

      {/* Objectives Section */}
      <div className={styles.objectives}>
        <h4 className={styles.objectivesHeader}>Objectives:</h4>
        <p className={styles.questDescription}>{project.description}</p>
      </div>

      {/* Technology Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className={styles.skills}>
          <span className={styles.skillsLabel}>Required Skills:</span>
          <div className={styles.tagsList}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.skillTag}>{tag}</span>
            ))}
          </div>
        </div>
      )}

      {/* Quest Actions */}
      <div className={styles.questActions}>
        {project.link_demo && (
          <a href={project.link_demo} target="_blank" rel="noopener noreferrer" className={styles.questButton}>
            Accept Quest
          </a>
        )}
        {project.link_repo && (
          <a href={project.link_repo} target="_blank" rel="noopener noreferrer" className={styles.questButton}>
            View Details
          </a>
        )}
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.string,
    is_featured: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    link_demo: PropTypes.string,
    link_repo: PropTypes.string
  }).isRequired
};

export default ProjectCard;
