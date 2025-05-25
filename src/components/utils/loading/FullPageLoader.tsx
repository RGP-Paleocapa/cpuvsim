// FullPageLoader.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from './Spinner';

const FullPageLoader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center space-y-4">
        <Spinner size="h-16 w-16" color="border-blue-600 dark:border-blue-300" />
        <p className="text-gray-700 dark:text-gray-300 text-lg">{t('loadingPage')}</p>
      </div>
    </div>
  );
};

export default FullPageLoader;
