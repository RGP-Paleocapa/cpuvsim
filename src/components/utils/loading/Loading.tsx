// Loading.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

const Loading: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 dark:border-blue-300 mb-4"></div>
        <p className="text-gray-700 dark:text-gray-300">{t('loading')}</p>
      </div>
    </div>
  );
};

export default Loading;
