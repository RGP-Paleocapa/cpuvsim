import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2023;
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
    <footer className="bg-white dark:bg-slate-800 text-black dark:text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-y-4 md:gap-x-8">
          <div className="flex flex-col items-center">
            <div>
              <h4 className="font-bold text-lg mb-2">References</h4>
              <ul>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Reference 1</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Reference 2</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Reference 3</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Reference 4</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg mb-2">Credits</h4>
            <button
              onClick={() => setShowCredits(!showCredits)}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              {showCredits ? 'Hide Credits' : 'Show Credits'}
            </button>
            {showCredits && (
              <ul>
                {credits.map((credit, index) => (
                  <li key={index}>{credit}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Copyright and Creative Commons License */}
        <div className="text-center mt-8 border-t pt-4">
          &copy; {startYear}{currentYear > startYear ? `-${currentYear}` : ''} Your eBook Platform
          <div className="flex justify-center items-center space-x-2 mt-2">
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 flex items-center"
            >
              <img
                src="/public/by-nc-sa.svg"
                alt="cc by-nc-sa"
                className="h-10 w-25"
              />
              <span className="ml-1">CC BY-NC-SA 4.0</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
