import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.name}>Tadeo Leon</h1>
        <h2 className={styles.title}>Arquitecto de Software & Sensei</h2>
        <p className={styles.description}>
          Construyo experiencias digitales sólidas y escalables. 
          Especializado en Laravel y React, transformo caos en código limpio.
        </p>
      </div>

      <nav className={styles.nav}>
        <a href="#about" className={styles.navLink}>
          <span className={styles.line}></span>
          <span className={styles.text}>About</span>
        </a>
        <a href="#experience" className={styles.navLink}>
          <span className={styles.line}></span>
          <span className={styles.text}>Experience</span>
        </a>
        <a href="#projects" className={styles.navLink}>
          <span className={styles.line}></span>
          <span className={styles.text}>Projects</span>
        </a>
      </nav>

      <ul className={styles.socials}>
        <li><a href="https://github.com/tadeoleon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/tadeoleon" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </section>
  );
};

export default Hero;
