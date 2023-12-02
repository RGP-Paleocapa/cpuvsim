import { Ul } from "@/components/common/eBook/content";
import { useState } from "react";

const Authors = () => {
    const [showCredits, setShowCredits] = useState(false);
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
        <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg mb-2">Authors</h4>
            <button
              onClick={() => setShowCredits(!showCredits)}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              {showCredits ? 'Hide Authors' : 'Show Authors'}
            </button>
            <div className={`transition-max-h max-h-0 overflow-hidden ease-in-out duration-300 ${showCredits ? 'max-h-96' : ''}`}>
              {showCredits && (
                <Ul>
                  {credits.map((credit, index) => (
                    <li key={index}>{credit}</li>
                  ))}
                </Ul>
              )}
            </div>
        </div>
    );
}

export default Authors;