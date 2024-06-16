// src/components/FuturisticBackground.jsx
import React from 'react';

const FuturisticBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-transparent opacity-50 animate-gradient-fast"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900 opacity-40 animate-gradient"></div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-white text-4xl font-bold tracking-wide uppercase">
          Your Dashboard
        </div>
      </div>
    </div>
  );
};

export default FuturisticBackground;
