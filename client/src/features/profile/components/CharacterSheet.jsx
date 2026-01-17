import styles from "./CharacterSheet.module.css";
import { profileData } from "../../../data/profile";

const CharacterSheet = () => {
  const { pii, hero, stats } = profileData;

  // Configuración de visualización para cada estadística
  const statConfig = [
    {
      key: "str",
      label: "Strength (Backend)",
      color: "#8b0000",
      value: stats.str,
    }, // Rojo Level Badge
    {
      key: "int",
      label: "Intellect (Logic)",
      color: "#0070DE",
      value: stats.int,
    }, // Azul Mago
    {
      key: "dex",
      label: "Agility (Frontend)",
      color: "#4CAF50",
      value: stats.dex,
    }, // Verde Menos Chillón (Material Green 500)
    {
      key: "vit",
      label: "Stamina (Resilience)",
      color: "#FF9900",
      value: stats.vit,
    }, // Naranja/Dorado
  ];

  return (
    <div className={styles.sheetContainer}>
      {/* Avatar Section */}
      <div className={styles.avatarFrame}>
        <img
          src={hero.avatarUrl}
          alt={pii.name}
          className={styles.avatarImage}
        />
      </div>

      {/* Basic Info */}
      <div className={styles.infoBlock}>
        <h1 className={styles.titleMain}>{hero.class}</h1>
        <h2 className={styles.titleSub}>{hero.specialization}</h2>
        <div className={styles.levelBadge}>Level {hero.level}</div>
      </div>

      <div className={styles.separator} />

      {/* Base Stats */}
      <div className={styles.statsGrid}>
        {statConfig.map((stat) => (
          <div key={stat.key} className={styles.statRow}>
            <div className={styles.statHeader}>
              <span className={styles.statLabel} style={{ color: stat.color }}>
                {stat.label}
              </span>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
            <div className={styles.progressBarContainer}>
              <div
                className={styles.progressBarFill}
                style={{
                  width: `${stat.value}%`,
                  backgroundColor: stat.color,
                  boxShadow: `0 0 10px ${stat.color}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.separator} />

      {/* Contact Mini-List */}
      <div className={styles.contactBlock}>
        <a href={`mailto:${pii.email}`} className={styles.contactItem}>
          ✉️ {pii.email}
        </a>
        <a
          href={pii.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          🔗 LinkedIn
        </a>
        <a
          href={pii.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          💻 GitHub
        </a>
        <div className={styles.contactItem}>📍 {pii.location}</div>
      </div>
    </div>
  );
};

export default CharacterSheet;
