import styles from './ProfileLayout.module.css';

const ProfileLayout = ({ children }) => {
  return (
    <div className={styles.profileContainer}>
       <div className={styles.overlay} />
       <div className={styles.contentFrame}>
           <div className={styles.characterSheetGrid}>
               {children}
           </div>
       </div>
    </div>
  );
};

export default ProfileLayout;