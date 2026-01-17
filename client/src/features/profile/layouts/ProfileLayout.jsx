import styles from './ProfileLayout.module.css';

const ProfileLayout = ({ children }) => {
  return (
    <div className={styles.profileContainer}>
       <div className={styles.backgroundEffect} />
       <div className={styles.contentFrame}>
           {children}
       </div>
    </div>
  );
};

export default ProfileLayout;
