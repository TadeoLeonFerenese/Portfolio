import styles from './TalentTree.module.css';
import { profileData } from '../../../data/profile';
import sectionStyles from './ExperienceLog.module.css';
import { 
  SiPhp, SiLaravel, SiNodedotjs, SiJavascript, SiReact, 
  SiHtml5, SiCss3, SiTailwindcss, SiAndroid, SiLinux, 
  SiGit, SiDocker, SiPython, SiPostgresql, SiMysql, 
  SiSqlite, SiApache, SiNginx, SiPandas, SiNumpy, SiVirtualbox
} from 'react-icons/si';
import { FaDatabase, FaServer, FaChartLine, FaNetworkWired, FaLayerGroup } from 'react-icons/fa';
import { TbChartHistogram } from 'react-icons/tb';

const TalentTree = () => {
  const { skills } = profileData;

  const skillIcons = {
    'PHP': <SiPhp />,
    'Laravel': <SiLaravel />,
    'Node.js': <SiNodedotjs />,
    'API REST': <FaNetworkWired />,
    'MVC': <FaLayerGroup />,
    'Apache/Nginx': <SiApache />,
    'PostgreSQL': <SiPostgresql />,
    'SQLite': <SiSqlite />,
    'MySQL': <SiMysql />,
    'TablePlus': <FaDatabase />,
    'JavaScript': <SiJavascript />,
    'React.js': <SiReact />,
    'HTML5': <SiHtml5 />,
    'CSS3': <SiCss3 />,
    'Tailwind': <SiTailwindcss />,
    'Android': <SiAndroid />,
    'Linux': <SiLinux />,
    'Git/GitHub': <SiGit />,
    'Docker': <SiDocker />,
    'VirtualBox': <SiVirtualbox />,
    'Python': <SiPython />,
    'Pandas': <SiPandas />,
    'NumPy': <SiNumpy />,
    'Matplotlib': <TbChartHistogram />,
    'Análisis': <FaChartLine />,
  };

  const renderSkillNode = (skill) => {
    const icon = skillIcons[skill];
    return (
      <div key={skill} className={styles.talentNode} title={skill}>
        <div className={styles.iconOnly}>{icon}</div>
        <span className={styles.skillName}>{skill}</span>
      </div>
    );
  };

  return (
    <div className={styles.treeContainer}>
      <h2 className={sectionStyles.sectionTitle}>Talent Tree (Skills)</h2>
      
      <div className={styles.categoryTitle}>Backend Arts</div>
      <div className={styles.skillGrid}>
        {skills.backend.map(renderSkillNode)}
      </div>

      <div className={styles.categoryTitle}>Databases</div>
      <div className={styles.skillGrid}>
        {skills.databases.map(renderSkillNode)}
      </div>

      <div className={styles.categoryTitle}>Frontend Mastery</div>
      <div className={styles.skillGrid}>
        {skills.frontend.map(renderSkillNode)}
      </div>

      <div className={styles.categoryTitle}>Infrastructure & Tools</div>
      <div className={styles.skillGrid}>
        {skills.infra.map(renderSkillNode)}
      </div>
      
      <div className={styles.categoryTitle}>Arcane Knowledge (Data)</div>
      <div className={styles.skillGrid}>
        {skills.data.map(renderSkillNode)}
      </div>
    </div>
  );
};

export default TalentTree;
