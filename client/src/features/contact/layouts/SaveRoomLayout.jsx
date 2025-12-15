import styles from './SaveRoomLayout.module.css';

const SaveRoomLayout = ({ children }) => {
  return (
    <div className={styles.roomContainer}>
        <div className={styles.vignette} />
        <div className={styles.deskArea}>
            {children}
        </div>
    </div>
  );
};

export default SaveRoomLayout;
