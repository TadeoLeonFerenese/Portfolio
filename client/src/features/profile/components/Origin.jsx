import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Origin.module.css';

const Origin = () => {
  const [activeTab, setActiveTab] = useState('gear');

  // Character Stats
  const stats = [
    { name: 'INT', value: 95, color: '#4a9eff', description: 'Backend/Logic' },
    { name: 'AGI', value: 85, color: '#50c878', description: 'Frontend/Mobile' },
    { name: 'STA', value: 100, color: '#ff5555', description: 'Infrastructure' },
    { name: 'WIS', value: 70, color: '#9d4edd', description: 'Data Science' }
  ];

  // Gear (Work Experience)
  const gear = [
    {
      name: 'Staff of the Judiciary',
      quality: 'legendary',
      position: 'Desarrollador de Software',
      company: 'Poder Judicial de la Nación',
      period: 'Junio 2025 - Presente',
      description: 'Desarrollo PHP/Laravel. Mantenimiento código legacy y entornos virtuales.'
    },
    {
      name: 'Plate of Critical Support',
      quality: 'epic',
      position: 'Soporte Técnico Especializado',
      company: 'Poder Judicial de la Nación',
      period: '2020 - 2025',
      description: 'Soporte Técnico Especializado. Infraestructura crítica.'
    },
    {
      name: 'Greaves of Pentacom',
      quality: 'rare',
      position: 'Soporte Técnico e Innovación',
      company: 'Pentacom S.A.',
      period: '2015 - 2020',
      description: 'Soporte Técnico e Innovación TI.'
    }
  ];

  // Talents (Skills)
  const talents = {
    'Backend': ['PHP', 'Laravel', 'Node.js', 'API REST'],
    'Frontend': ['React.js', 'Tailwind', 'ES6+', 'CSS Modules'],
    'Infrastructure': ['Linux', 'Docker', 'Git', 'VirtualBox'],
    'Data': ['Python', 'SQL', 'Postgres', 'MySQL']
  };

  // Quest Log (Education)
  const quests = [
    {
      status: 'completed',
      name: 'Técnico Universitario en Programación',
      institution: 'Universidad Nacional de Almirante Brown',
      year: '2025'
    },
    {
      status: 'in-progress',
      name: 'Licenciatura en Ciencia de Datos',
      institution: 'Universidad Nacional de Almirante Brown',
      year: 'En Curso'
    },
    {
      status: 'completed',
      name: 'Bootcamp Full Stack MERN',
      institution: 'Autodidacta',
      year: '2024'
    }
  ];

  const getQualityColor = (quality) => {
    const colors = {
      legendary: '#ff8000',
      epic: '#a335ee',
      rare: '#0070dd'
    };
    return colors[quality] || '#fff';
  };

  return (
    <div className={styles.originContainer}>
      <motion.div 
        className={styles.characterSheet}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Panel - Profile & Stats */}
        <div className={styles.leftPanel}>
          {/* Character Header */}
          <div className={styles.characterHeader}>
            <h1 className={styles.characterName}>Tadeo Daniel Leon Ferenese</h1>
            <div className={styles.characterClass}>
              <span className={styles.level}>Level 30</span>
              <span className={styles.className}>Code Warlock</span>
              <span className={styles.spec}>(Full Stack Spec)</span>
            </div>
            <div className={styles.guild}>
              <span className={styles.guildLabel}>Guild:</span>
              <span className={styles.guildName}>Poder Judicial de la Nación</span>
            </div>
            <div className={styles.location}>
              <span className={styles.locationIcon}>📍</span>
              <span>José Mármol, Buenos Aires</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className={styles.statsContainer}>
            <h2 className={styles.sectionTitle}>Atributos</h2>
            {stats.map((stat) => (
              <div key={stat.name} className={styles.statRow}>
                <div className={styles.statInfo}>
                  <span className={styles.statName}>{stat.name}</span>
                  <span className={styles.statDesc}>{stat.description}</span>
                </div>
                <div className={styles.statBarContainer}>
                  <motion.div 
                    className={styles.statBar}
                    style={{ backgroundColor: stat.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <span className={styles.statValue}>{stat.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Tabs */}
        <div className={styles.rightPanel}>
          {/* Tab Navigation */}
          <div className={styles.tabNavigation}>
            <button
              className={`${styles.tabButton} ${activeTab === 'gear' ? styles.active : ''}`}
              onClick={() => setActiveTab('gear')}
            >
              Gear
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'talents' ? styles.active : ''}`}
              onClick={() => setActiveTab('talents')}
            >
              Talents
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'quests' ? styles.active : ''}`}
              onClick={() => setActiveTab('quests')}
            >
              Quest Log
            </button>
          </div>

          {/* Tab Content */}
          <div className={styles.tabContent}>
            <AnimatePresence mode="wait">
              {activeTab === 'gear' && (
                <motion.div
                  key="gear"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.gearContent}
                >
                  <h3 className={styles.contentTitle}>Experiencia Laboral</h3>
                  {gear.map((item, index) => (
                    <div key={index} className={styles.gearItem}>
                      <h4 
                        className={styles.itemName}
                        style={{ color: getQualityColor(item.quality) }}
                      >
                        {item.name}
                      </h4>
                      <div className={styles.itemPosition}>{item.position}</div>
                      <div className={styles.itemCompany}>{item.company}</div>
                      <div className={styles.itemPeriod}>{item.period}</div>
                      <div className={styles.itemTooltip}>{item.description}</div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'talents' && (
                <motion.div
                  key="talents"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.talentsContent}
                >
                  <h3 className={styles.contentTitle}>Habilidades Técnicas</h3>
                  {Object.entries(talents).map(([category, skills]) => (
                    <div key={category} className={styles.talentCategory}>
                      <h4 className={styles.categoryName}>{category}</h4>
                      <div className={styles.skillTags}>
                        {skills.map((skill, index) => (
                          <span key={index} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'quests' && (
                <motion.div
                  key="quests"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.questsContent}
                >
                  <h3 className={styles.contentTitle}>Educación</h3>
                  {quests.map((quest, index) => (
                    <div key={index} className={styles.questItem}>
                      <div className={styles.questHeader}>
                        <span className={`${styles.questStatus} ${styles[quest.status]}`}>
                          {quest.status === 'completed' ? '✓' : '⟳'}
                        </span>
                        <h4 className={styles.questName}>{quest.name}</h4>
                      </div>
                      <div className={styles.questInstitution}>{quest.institution}</div>
                      <div className={styles.questYear}>{quest.year}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Origin;
