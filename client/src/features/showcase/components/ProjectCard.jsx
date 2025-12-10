import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {project.image_url ? (
          <img src={project.image_url} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>No Image</div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.is_featured && <span className={styles.badge}>Destacado</span>}
        </div>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.tags}>
          {project.tags && project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.links}>
          {project.link_demo && (
            <a href={project.link_demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Ver Demo
            </a>
          )}
          {project.link_repo && (
            <a href={project.link_repo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Código
            </a>
          )}
        </div>
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
