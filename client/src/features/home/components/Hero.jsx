import styles from './Hero.module.css';
import Button from '@components/ui/Button';

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Tadeo Leon <span className={styles.highlight}>Ferense</span>
        </h1>
        <h2 className={styles.subtitle}>Arquitecto de Software & Infraestructura</h2>
        <p className={styles.description}>
          Con 10 años de experiencia forjando sistemas resilientes. 
          Especialista en modernización de legado y arquitecturas escalables.
        </p>
        <div className={styles.actions}>
          <Button onClick={scrollToProjects}>Ver Proyectos</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
