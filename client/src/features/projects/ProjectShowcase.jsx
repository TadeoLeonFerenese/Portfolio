import { useProjects } from '../../hooks/useProjects';
import FeaturedProject from './FeaturedProject';
import ArchiveTable from './ArchiveTable';
import styles from './ProjectShowcase.module.css';

const ProjectShowcase = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error loading projects.</div>;

  const featured = projects.filter(p => p.is_featured);
  const archive = projects.filter(p => !p.is_featured);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Projects</h2>
      </div>
      
      <div className={styles.featured}>
        {featured.map(project => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>

      {archive.length > 0 && <ArchiveTable projects={archive} />}
    </section>
  );
};

export default ProjectShowcase;
