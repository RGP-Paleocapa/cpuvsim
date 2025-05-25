// SectionLoader.tsx
import React from 'react';
import Spinner from './Spinner';

const SectionLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <Spinner />
    </div>
  );
};

export default SectionLoader;
