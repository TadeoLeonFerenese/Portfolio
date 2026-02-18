import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  // Determine item quality tier based on project metadata
  const getQualityClass = () => {
    if (project.is_featured) return styles.legendary;
    if (project.priority === 'high') return styles.epic;
    return styles.rare;
  };

  const qualityClass = getQualityClass();

  return (
    <article className={styles.projectCard}>
      {/* Featured Badge */}
      {project.is_featured && (
        <div className={styles.featuredBadge}>Featured</div>
      )}

      {/* Project Title */}
      <h3 className={styles.projectTitle}>{project.title}</h3>

      {/* Project Image */}
      {project.cover_image && (
        <div className={styles.projectImage}>
          <img src={project.cover_image} alt={project.title} />
        </div>
      )}

      {/* Description */}
      <p className={styles.projectDescription}>{project.description}</p>

      {/* Technology Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className={styles.tagsSection}>
          <span className={styles.tagsLabel}>Tech Stack</span>
          <div className={styles.tagsList}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className={styles.projectActions}>
        {project.links?.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
            Live Demo
          </a>
        )}
        {project.links?.repo && (
          <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
            View Code
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
    cover_image: PropTypes.string,
    is_featured: PropTypes.bool,
    priority: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      demo: PropTypes.string,
      repo: PropTypes.string,
    }),
  }).isRequired
};

export default ProjectCard;
