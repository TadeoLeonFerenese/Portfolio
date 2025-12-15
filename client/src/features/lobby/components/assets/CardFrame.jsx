
import React from 'react';

const CardFrame = ({ children, className }) => {
  return (
    <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* SVG Background Layer */}
      <svg width="100%" height="100%" viewBox="0 0 300 420" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, pointerEvents: 'none' }}>
        <defs>
            <linearGradient id="stoneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#3a3a3a'}} />
                <stop offset="50%" style={{stopColor: '#5a5a5a'}} />
                <stop offset="100%" style={{stopColor: '#3a3a3a'}} />
            </linearGradient>
            <pattern id="noise" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Simple noise pattern could go here, or just solid color for now */}
                <rect width="100" height="100" fill="#444" opacity="0.1"/>
            </pattern>
        </defs>
        
        {/* Main Frame Body (inverse of the portrait oval) */}
        {/* We use a mask or just a path with a hole using EvenOdd rule */}
        {/* Path: Outer Rect (Round Top) minus Inner Oval */}
        <path 
            fillRule="evenodd"
            d="
                M 0 40 
                Q 0 0 40 0 
                H 260 
                Q 300 0 300 40 
                V 400 
                Q 300 420 280 420 
                H 20 
                Q 0 420 0 400 
                Z 
                
                M 150 25
                A 100 130 0 0 0 50 155 
                A 100 130 0 0 0 250 155
                A 100 130 0 0 0 150 25
                Z
            "
            fill="url(#stoneGradient)"
            stroke="#1a1a1a"
            strokeWidth="4"
        />

        {/* Gold Trim around the Oval */}
        <ellipse cx="150" cy="155" rx="102" ry="132" fill="none" stroke="#daa520" strokeWidth="6" />
        
        {/* Box for Description (Bottom) */}
        <rect x="25" y="270" width="250" height="130" rx="5" fill="#eaddcf" stroke="#daa520" strokeWidth="4" />
        
        {/* Name Banner Ribbon Background */}
        <path d="M 20 220 H 280 L 290 235 L 280 250 H 20 L 10 235 Z" fill="#eaddcf" stroke="#333" strokeWidth="2" />
      </svg>
      
      {/* Content Slot */}
      <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 5 }}>
        {children}
      </div>
    </div>
  );
};

export default CardFrame;
