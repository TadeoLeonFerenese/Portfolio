
import React from 'react';

const HeroFrame = ({ children, className }) => {
  return (
    <div className={className} style={{ position: 'relative', width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Ornate Gold Frame SVG */}
      <svg width="100%" height="100%" viewBox="0 0 150 150" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, pointerEvents: 'none', overflow: 'visible' }}>
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#fdd835'}} />
            <stop offset="30%" style={{stopColor: '#fbc02d'}} />
            <stop offset="60%" style={{stopColor: '#f57f17'}} />
            <stop offset="100%" style={{stopColor: '#ff6f00'}} />
          </linearGradient>
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>

        {/* Main Ring */}
        <circle cx="75" cy="75" r="58" fill="none" stroke="url(#goldGradient)" strokeWidth="6" filter="url(#dropShadow)" />
        
        {/* Dragon/Ornate Details (Simplified Wings) */}
        <path d="M 15 75 Q 5 40 30 20 Q 50 15 60 25" fill="none" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 135 75 Q 145 40 120 20 Q 100 15 90 25" fill="none" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
        
        {/* Bottom Decoration */}
        <path d="M 40 120 Q 75 145 110 120 L 100 110 L 75 125 L 50 110 Z" fill="url(#goldGradient)" />
      </svg>
      
      {/* Content (Avatar) */}
      <div style={{ position: 'relative', width: '106px', height: '106px', borderRadius: '50%', overflow: 'hidden', zIndex: 5, border: '2px solid #000' }}>
        {children}
      </div>
    </div>
  );
};

export default HeroFrame;
