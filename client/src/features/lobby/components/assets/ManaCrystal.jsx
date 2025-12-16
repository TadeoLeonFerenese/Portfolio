
import React from 'react';

const ManaCrystal = ({ cost, className, style }) => {
  return (
    <div className={className} style={{...style, position: 'relative', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" style={{position: 'absolute', top: 0, left: 0, overflow: 'visible'}}>
        <defs>
          <linearGradient id="manaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#00d2ff', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#3a7bd5', stopOpacity: 1}} />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Hexagon Shape */}
        <path 
          d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" 
          fill="url(#manaGradient)" 
          stroke="#000" 
          strokeWidth="3"
          filter="url(#glow)"
        />
        {/* Inner Highlight/Border */}
        <path 
          d="M50 5 L90 27 L90 73 L50 95 L10 73 L10 27 Z" 
          fill="none" 
          stroke="rgba(255,255,255,0.4)" 
          strokeWidth="2"
        />
      </svg>
      <span style={{
        position: 'relative', 
        zIndex: 10, 
        color: 'white', 
        fontFamily: "'Cinzel', serif", 
        fontSize: '32px', 
        fontWeight: 'bold',
        textShadow: '0px 0px 4px #000, 2px 2px 0px #000',
        pointerEvents: 'none'
      }}>
        {cost}
      </span>
    </div>
  );
};

export default ManaCrystal;
