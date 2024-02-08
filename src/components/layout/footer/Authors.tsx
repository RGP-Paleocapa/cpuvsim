import { Ul } from "@/components/common/eBook/content";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Authors = () => {
    const [showAuthors, setShowAuthors] = useState(false);
    const { t } = useTranslation();
    const credits = [
      'Rares Gabriel Puiu  (latest version)',
      'MariaPia Cavaretta',
      'Giordano Cortinovis',
      'Giovanni Ingargiola',
      'Alessandro Suru',
      'Andrea Sileo',
      'Sarai Fernandez',
      'Renato Cortinovis (project coordinator)',
    ];

    return (
      <div className="relative flex flex-col items-center md:items-start">
        <h2 className="font-bold text-lg mb-2">{t("footer.links.credits")}:</h2>
      <button
        onClick={() => setShowAuthors(!showAuthors)}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
      >
        {t("footer.links.authors")}
      </button>
      {showAuthors && (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-80 z-50">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="font-bold text-lg mb-2">Authors:</h2>
            <Ul>
              {credits.map((credit, index) => (
                <li key={index}>{credit}</li>
              ))}
            </Ul>
            <button
              onClick={() => setShowAuthors(false)}
              className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              {t("footer.links.close")}
            </button>
          </div>
        </div>
      )}
    </div>
    );
}

export default Authors;