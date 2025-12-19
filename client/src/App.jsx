import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';

// Features & Layouts
import LobbyLayout from '@features/lobby/layouts/LobbyLayout';
import ServerScroll from '@features/lobby/components/ServerScroll';
import Hero from '@features/home/components/Hero'; // Re-using Hero profile as child of Lobby

import InventoryLayout from '@features/showcase/layouts/InventoryLayout';
import ProjectGrid from '@features/showcase/components/ProjectGrid';
import { useProjects } from '@features/showcase/hooks/useProjects';

import ContactLayout from '@features/contact/layouts/ContactLayout';
import ContactForm from '@features/contact/components/ContactForm';

// Individual Page Components (Wrapper logic)

const DashboardPage = () => {
    return (
      <LobbyLayout>
        {/* Main Dashboard Content placeholder */}
      </LobbyLayout>
    );
};

const ProjectsPage = () => {
    const { projects, loading, error } = useProjects();
    
    // Simple loading states inside the theme
    if (loading) return <div style={{color: '#fff'}}>Loading Artifacts...</div>;
    
    return (
      <InventoryLayout>
           <ProjectGrid projects={projects} />
      </InventoryLayout>
    );
};

const ContactPage = () => {
    return (
      <ContactLayout>
          <ContactForm />
      </ContactLayout>
    );
};

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Navigation />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
