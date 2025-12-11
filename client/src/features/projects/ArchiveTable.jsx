import styles from './ArchiveTable.module.css';

const ArchiveTable = ({ projects }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Other Projects</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th className={styles.hideMobile}>Tech</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className={styles.row}>
              <td className={styles.year}>
                {project.created_at ? new Date(project.created_at).getFullYear() : '2024'}
              </td>
              <td className={styles.title}>{project.title}</td>
              <td className={styles.hideMobile}>
                {project.tags && (
                  <div className={styles.tags}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </td>
              <td>
                <div className={styles.links}>
                    {project.link_repo && <a href={project.link_repo} target="_blank" rel="noopener noreferrer">Git</a>}
                    {project.link_demo && <a href={project.link_demo} target="_blank" rel="noopener noreferrer">Demo</a>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArchiveTable;
