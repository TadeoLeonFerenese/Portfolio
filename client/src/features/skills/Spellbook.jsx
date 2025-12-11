import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './Spellbook.module.css';

const spells = [
    { id: 1, name: "React", school: "Illusion", desc: "Conjures dynamic interfaces.", icon: "⚛️" },
    { id: 2, name: "Laravel", school: "Conjuration", desc: "Summons robust backends.", icon: "🐘" },
    { id: 3, name: "SQL", school: "Divination", desc: "Retrieves ancient knowledge.", icon: "💾" },
    { id: 4, name: "Docker", school: "Transmutation", desc: "Containers for any environment.", icon: "🐳" },
    { id: 5, name: "Git", school: "Necromancy", desc: "Resurrects lost versions.", icon: "🌳" },
];

const Spellbook = () => {
    const [activeSpell, setActiveSpell] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (e, spell) => {
        // Use Element's position for stable, "locked" tooltip placement
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({ 
            x: rect.left + rect.width / 2, 
            y: rect.top 
        });
        setActiveSpell(spell);
    };

    const handleMouseLeave = () => {
        setActiveSpell(null);
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Grimoire of Skills</h2>
            <div className={styles.grid}>
                {spells.map((spell) => (
                    <Rune 
                        key={spell.id} 
                        spell={spell} 
                        onMouseEnter={(e) => handleMouseEnter(e, spell)}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>

            {/* Global Fixed Tooltip via Portal - Escapes ALL Stacking Contexts */}
            {/* Global Fixed Tooltip via Portal - Escapes ALL Stacking Contexts */}
            {activeSpell && createPortal(
                <div 
                    style={{ 
                        position: 'fixed',
                        top: cursorPos.y - 15, /* Lift directly via top */
                        left: cursorPos.x,
                        transform: 'translate(-50%, -100%)',
                        width: '200px',
                        backgroundColor: '#f0e6d2', /* var(--bg-parchment) */
                        color: '#2c1810', /* var(--text-dark) */
                        padding: '1rem',
                        border: '1px solid #8e7d5e',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                        borderRadius: '4px',
                        fontFamily: "'Cinzel', serif",
                        pointerEvents: 'none',
                        zIndex: 2147483647, // Max Safe Integer
                        whiteSpace: 'normal',
                        textAlign: 'left'
                    }}
                >
                    <h4 className={styles.spellName} style={{ margin: '0 0 0.2rem 0', fontFamily: "'MedievalSharp', cursive", color: '#5c3a21', fontSize: '1.2rem' }}>
                        {activeSpell.name}
                    </h4>
                    <span className={clsx(styles.school, styles[activeSpell.school])} style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#666' }}>
                        {activeSpell.school}
                    </span>
                    <p className={styles.desc} style={{ margin: 0, fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.3 }}>
                        {activeSpell.desc}
                    </p>
                </div>,
                document.body
            )}
        </section>
    );
};

const Rune = ({ spell, onMouseEnter, onMouseLeave }) => (
    <div 
        className={styles.runeContainer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <motion.div 
            className={styles.rune}
            whileHover={{ scale: 1.1 }}
        >
            {spell.icon}
        </motion.div>
    </div>
);

export default Spellbook;
