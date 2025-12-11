import styles from './MainLayout.module.css';

const MainLayout = ({ leftContent, rightContent }) => {
  return (
    <div className={styles.container}>
      <header className={styles.leftColumn}>
        {leftContent}
      </header>
      <main className={styles.rightColumn}>
        {rightContent}
      </main>
    </div>
  );
};

export default MainLayout;
