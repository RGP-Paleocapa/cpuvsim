// PageLoader.tsx
import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div className="animate-pulse px-6 py-10 space-y-4 max-w-3xl mx-auto">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
    </div>
  );
};

export default PageLoader;
