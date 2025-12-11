import styles from './FeaturedProject.module.css';

const FeaturedProject = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {project.image_url ? (
          <img src={project.image_url} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        {project.tags && (
          <ul className={styles.tags}>
            {project.tags.map((tag, idx) => (
              <li key={idx} className={styles.tag}>{tag}</li>
            ))}
          </ul>
        )}

        <div className={styles.links}>
          {project.link_repo && (
            <a href={project.link_repo} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          )}
          {project.link_demo && (
            <a href={project.link_demo} target="_blank" rel="noopener noreferrer" className={styles.link}>Demo</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
