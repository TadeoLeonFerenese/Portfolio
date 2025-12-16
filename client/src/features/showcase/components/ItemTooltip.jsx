import styles from './ItemTooltip.module.css';

const ItemTooltip = ({ project }) => {
  return (
    <div className={styles.tooltipContainer}>
      <h4 className={styles.itemName}>{project.title}</h4>
      <p className={styles.itemType}>Legendary Artifact</p>
      
      <div className={styles.divider} />
      
      <div className={styles.stats}>
        {project.technologies?.map((tech, index) => (
          <div key={index} className={styles.statLine}>
            <span className={styles.plus}>+</span>
            <span className={styles.tech}>{tech}</span>
            <span className={styles.desc}>(Mastery)</span>
          </div>
        ))}
      </div>
      
      <div className={styles.divider} />
      
      <p className={styles.fluffText}>
        "{project.description ? project.description.substring(0, 100) : 'A powerful artifact found in the depths of the code mines.'}..."
      </p>
      
      <p className={styles.reqLevel}>Requires Level 60 Dev</p>
    </div>
  );
};

export default ItemTooltip;
