import styles from "./ScrollsOfWisdom.module.css";
import { profileData } from "../../../data/profile";

const ScrollsOfWisdom = () => {
  const { education } = profileData;

  const getStatusIcon = (status) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes("graduado") || lowerStatus.includes("completed")) {
      return <span className={styles.iconCompleted}>✓</span>;
    }
    if (lowerStatus.includes("en curso") || lowerStatus.includes("present")) {
      return <span className={styles.iconInProgress}>✎</span>;
    }
    return null;
  };

  return (
    <div className={styles.simpleContainer}>
      <h2 className={styles.title}>Scrolls of Wisdom (Education)</h2>

      {education.map((edu, index) => (
        <div key={index} className={styles.item}>
          {getStatusIcon(edu.status)}
          
          <div className={styles.itemContent}>
            <div className={styles.degreeRow}>
              <span className={styles.degreeText}>{edu.degree}</span>
            </div>
            <span className={styles.institution}>{edu.institution}</span>
            <div className={styles.status}>{edu.status}</div>
            {edu.details && (
              <div className={styles.details}>{edu.details}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollsOfWisdom;
