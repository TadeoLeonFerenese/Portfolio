import { useServerStats } from '../hooks/useServerStats';
import ApiGem from './ApiGem';
import styles from './ServerScroll.module.css';

const ServerScroll = () => {
  const { stats, loading, error } = useServerStats();

  if (loading) return <div className={styles.loading}>Summoning Spirits...</div>;
  if (error) return <div className={styles.error}>Connection Severed</div>;

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.scrollBody}>
        <div className={styles.scrollContent}>
          <h3 className={styles.questTitle}>Quest Objectives:</h3>
          <h4 className={styles.serverName}>{stats.server_name} Status</h4>
          
          <ul className={styles.questList}>
            <li>
              <span className={styles.label}>CPU Load:</span>
              <span className={styles.value}>{stats.cpu_load}% <span className={styles.subtext}>(Fel Stable)</span></span>
            </li>
            <li>
              <span className={styles.label}>Uptime:</span>
              <span className={styles.value}>{stats.uptime}</span>
            </li>
            <li>
              <span className={styles.label}>Memory:</span>
              <span className={styles.value}>{stats.memory_usage} <span className={styles.subtext}>(Warsong)</span></span>
            </li>
          </ul>

          <div className={styles.footerStatus}>
             <ApiGem status={stats.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerScroll;
