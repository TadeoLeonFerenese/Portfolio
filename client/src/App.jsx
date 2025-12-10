import { useProjects } from '@features/showcase/hooks/useProjects';
import Hero from '@features/home/components/Hero';
import ProjectGrid from '@features/showcase/components/ProjectGrid';

function App() {
  const { projects, loading, error } = useProjects();

  return (
    <main>
      <Hero />
      
      <section id="projects" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '4rem 2rem' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '2.5rem', 
          marginBottom: '3rem',
          color: 'var(--text-primary)' 
        }}>
          Proyectos Destacados
        </h2>

        {loading && <p style={{ textAlign: 'center' }}>Cargando...</p>}
        
        {error && (
          <p style={{ textAlign: 'center', color: 'var(--accent-red)' }}>
            Error al cargar proyectos.
          </p>
        )}

        {!loading && !error && projects.length > 0 && (
          <ProjectGrid projects={projects} />
        )}
      </section>
    </main>
  )
}

export default App
