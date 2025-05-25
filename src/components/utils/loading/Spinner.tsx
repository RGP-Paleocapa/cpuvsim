// Spinner.tsx
import React from 'react';

const Spinner: React.FC<{ size?: string; color?: string }> = ({ size = 'h-8 w-8', color = 'border-blue-500' }) => {
  return (
    <div className={`animate-spin rounded-full ${size} border-t-4 ${color} border-solid border-opacity-50`}></div>
  );
};

export default Spinner;
