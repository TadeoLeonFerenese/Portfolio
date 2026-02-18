import styles from './ProfileLayout.module.css';
import rainVideo from '../../../assets/lluvia.mp4';

const ProfileLayout = ({ children }) => {
  return (
    <div className={styles.profileContainer}>
       <div className={styles.overlay} />

       {/* Efecto de lluvia — mismo que Dashboard */}
       <video
         className={styles.rainVideo}
         autoPlay
         loop
         muted
         playsInline
       >
         <source src={rainVideo} type="video/mp4" />
       </video>

       <div className={styles.contentFrame}>
           <div className={styles.characterSheetGrid}>
               {children}
           </div>
       </div>
    </div>
  );
};

export default ProfileLayout;