import { useMemo } from 'react';
import styles from './RainEffect.module.css';

const RainEffect = ({ intensity = 50 }) => {
  const drops = useMemo(() => {
    return Array.from({ length: intensity }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${0.5 + Math.random() * 0.5}s`,
      animationDelay: `${Math.random() * 2}s`,
      opacity: Math.random()
    }));
  }, [intensity]);

  return (
    <div className={styles.rainContainer}>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className={styles.raindrop}
          style={{
            left: drop.left,
            animationDuration: drop.animationDuration,
            animationDelay: drop.animationDelay,
            opacity: drop.opacity
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;
