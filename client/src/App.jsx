import CharacterSheet from './features/hero/CharacterSheet';
import Spellbook from './features/skills/Spellbook';
import QuestBoard from './features/quests/QuestBoard';

function App() {
  return (
    <main style={{ paddingBottom: '4rem' }}>
      <CharacterSheet />
      <div style={{ margin: '4rem 0' }}>
        <Spellbook />
      </div>
      <QuestBoard />
      
      <footer style={{ 
        textAlign: 'center', 
        marginTop: '6rem', 
        color: 'var(--border-gold)',
        borderTop: '1px solid var(--border-gold)',
        paddingTop: '2rem',
        width: 'max-content',
        margin: '6rem auto 0 auto'
      }}>
        <p>Built by a Lvl 30 Archmage. © 2025</p>
      </footer>
    </main>
  );
}

export default App;
