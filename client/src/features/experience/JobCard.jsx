import styles from './JobCard.module.css';

const JobCard = ({ job }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'short' });
  };

  return (
    <div className={styles.card}>
      <div className={styles.period}>
        {formatDate(job.start_date)} — {formatDate(job.end_date)}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {job.title} · <span className={styles.company}>{job.company}</span>
        </h3>
        {Array.isArray(job.description) ? (
          <ul className={styles.descriptionList}>
            {job.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.descriptionText}>{job.description}</p>
        )}
      </div>
    </div>
  );
};

export default JobCard;
