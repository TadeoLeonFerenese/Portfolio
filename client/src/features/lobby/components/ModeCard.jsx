import styles from './ModeCard.module.css';
import ManaCrystal from './assets/ManaCrystal';

const ModeCard = ({ title, description, onClick }) => {
    return (
        <div className={styles.cardWrapper} onClick={onClick}>
            <div className={styles.cardInner}>
                <span className={styles.cardName}>{title}</span>
                {description && <p className={styles.descriptionText}>{description}</p>}
            </div>
        </div>
    );
};

export default ModeCard;
