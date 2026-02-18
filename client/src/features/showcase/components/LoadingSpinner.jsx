import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading Artifacts...</p>
    </div>
  );
};

export default LoadingSpinner;
