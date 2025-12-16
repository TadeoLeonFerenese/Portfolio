import { useState } from 'react';
import ItemTooltip from './ItemTooltip';
import styles from './InventorySlot.module.css';

const InventorySlot = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Fallback image if project has no image
  const bgImage = project.image || 'https://via.placeholder.com/64/333333/888888?text=?';

  return (
    <div 
      className={styles.slotContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={styles.itemIcon}
        style={{ backgroundImage: `url(${bgImage})` }} 
      />
      
      {/* Overlay to darken/highlight */}
      <div className={styles.slotOverlay} />

      {isHovered && <ItemTooltip project={project} />}
    </div>
  );
};

export default InventorySlot;
