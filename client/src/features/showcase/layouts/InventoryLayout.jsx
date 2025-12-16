import styles from './InventoryLayout.module.css';

const InventoryLayout = ({ children }) => {
  return (
    <div className={styles.dungeonContainer}>
       <div className={styles.fog} />
       <div className={styles.contentFrame}>
           {children}
       </div>
    </div>
  );
};

export default InventoryLayout;
