import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MainMenu from './features/menu/MainMenu';
import ScreenOrigin from './features/screens/ScreenOrigin';
import ScreenProjects from './features/screens/ScreenProjects';
import ScreenContact from './features/screens/ScreenContact';
import ArcaneBackground from './components/ui/ArcaneBackground';

function App() {
  const [currentScreen, setCurrentScreen] = useState('MAIN_MENU');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const backToMenu = () => {
    setCurrentScreen('MAIN_MENU');
  };

  return (
    <main style={{ backgroundColor: '#1a0b05', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
      <ArcaneBackground />
      <AnimatePresence mode="wait">
        {currentScreen === 'MAIN_MENU' && (
          <MainMenu key="menu" onNavigate={navigateTo} />
        )}

        {currentScreen === 'ORIGIN' && (
          <ScreenOrigin key="origin" onBack={backToMenu} />
        )}

        {currentScreen === 'PROJECTS' && (
          <ScreenProjects key="projects" onBack={backToMenu} />
        )}

        {currentScreen === 'CONTACT' && (
          <ScreenContact key="contact" onBack={backToMenu} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
