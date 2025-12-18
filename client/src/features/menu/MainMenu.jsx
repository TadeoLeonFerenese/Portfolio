import { motion } from 'framer-motion';
import styles from './MainMenu.module.css';

const MainMenu = ({ onNavigate }) => {
  const menuItems = [
    { 
      id: 'ORIGIN', 
      label: 'PERSONAJE', 
      desc: "Atributos y Lore", 
      colorClass: styles.red,
      // Icono: Usuario/Avatar Clásico
      icon: (
        <svg viewBox="0 0 448 512" className={styles.icon} fill="currentColor">
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
        </svg>
      )
    },
    { 
      id: 'PROJECTS', 
      label: 'MISIONES', 
      desc: "Campañas Finalizadas", 
      colorClass: styles.blue,
      // Icono: Papiro/Mapa Desenrollado
      icon: (
        <svg viewBox="0 0 512 512" className={styles.icon} fill="currentColor">
          <path d="M0 96C0 43 43 0 96 0h96V190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5V0h32 32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32z"/>
        </svg>
      )
    },
    { 
      id: 'CONTACT', 
      label: 'HOGUERA', 
      desc: "Descansar y Charlar", 
      colorClass: styles.green,
      // Icono: Fuego Clásico (Fire)
      icon: (
        <svg viewBox="0 0 448 512" className={styles.icon} fill="currentColor">
          <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-9.6-12.2-19.4-24.7-28.9-37.3c-4.8 13.9-15 40.5-22.6 63.8l-1.6 4.9c-6.1 18.6-20.5 33.9-38.5 41C135.5 370.8 168.1 416 225.7 416z"/>
        </svg>
      )
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.particles} aria-hidden="true"></div>
      <h1 className={styles.gameTitle}>CRÓNICAS DE TADEO</h1>
      
      <div className={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`${styles.cardWrapper} ${item.colorClass}`}
            onClick={() => onNavigate(item.id)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardContent}>
              {item.icon}
              <h2 className={styles.title}>{item.label}</h2>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;