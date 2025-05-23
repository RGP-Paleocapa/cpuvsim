import { UnorderedList } from '@/components/features/eBook/typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Authors = () => {
  const [showAuthors, setShowAuthors] = useState(false);
  const { t } = useTranslation();
  const credits = [
    'Rares Gabriel Puiu (latest version)',
    'MariaPia Cavaretta',
    'Giordano Cortinovis',
    'Giovanni Ingargiola',
    'Alessandro Suru',
    'Andrea Sileo',
    'Sarai Fernandez',
    'Renato Cortinovis (project coordinator)',
  ];

  return (
    <section className="relative flex flex-col items-center md:items-start">
      <h2 className="font-bold text-lg mb-2">{t("footer.links.credits")}:</h2>
      <button
        aria-expanded={showAuthors}
        aria-controls="authorsList"
        onClick={() => setShowAuthors(!showAuthors)}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 transition duration-300"
      >
        {t("footer.links.authors")}
      </button>
      {showAuthors && (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-80 z-50">
          <article className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-2">Authors:</h3>
            <UnorderedList id="authorsList">
              {credits.map((credit, index) => (
                <li key={index}>{credit}</li>
              ))}
            </UnorderedList>
            <button
              onClick={() => setShowAuthors(false)}
              className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 transition duration-300"
            >
              {t("footer.links.close")}
            </button>
          </article>
        </div>
      )}
    </section>
  );
};

export default Authors;
