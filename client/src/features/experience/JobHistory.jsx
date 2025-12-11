import { useJobs } from '../../hooks/useJobs';
import JobCard from './JobCard';
import styles from './JobHistory.module.css';

const JobHistory = () => {
  const { jobs, loading, error } = useJobs();

  if (loading) return <div>Loading experiences...</div>;
  if (error) return <div>Error loading experience.</div>;

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Experience</h2>
      </div>
      <div className={styles.list}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobHistory;
