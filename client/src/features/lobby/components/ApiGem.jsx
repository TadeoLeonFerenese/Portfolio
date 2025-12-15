import styles from './ApiGem.module.css';

const ApiGem = ({ status = 'ONLINE' }) => {
  const isOnline = status === 'ONLINE';
  
  return (
    <div className={styles.gemContainer} title={`API Status: ${status}`}>
      <div className={`${styles.gem} ${isOnline ? styles.gemGreen : styles.gemRed}`}>
        <div className={styles.gemShine} />
      </div>
      <span className={styles.gemLabel}>{status}</span>
    </div>
  );
};

export default ApiGem;
