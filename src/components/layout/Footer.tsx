import React, { useState } from 'react';
import licenza from "/by-nc-sa.svg";
import { useFooter } from '@/context/FooterContext';
import { FooterItem } from '@/types/footerTypes';
import { Ol, Ul } from '../common/eBook/content';

const Footer: React.FC = () => {
  const { footerData } = useFooter(); // footerData is an array of FooterItem
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

  // Function to render sub references, if any
  const renderSubReferences = (subReferences: FooterItem[]) => (
    <Ul>
      {subReferences.map((subItem, subIndex) => (
        <li key={subIndex}>
          <a href={subItem.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            {subItem.text}
          </a>
        </li>
      ))}
    </Ul>
  );

  return (
    <footer className="bg-white dark:bg-slate-800 text-black dark:text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-y-4 md:gap-x-8">
          {/* Dynamic References with possible sub-references */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg mb-2">References and Helpful Links:</h4>
            <Ol>
              {footerData.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                    {item.text}
                  </a>
                  {/* Check for subReferences and render them */}
                  {item.subReferences && renderSubReferences(item.subReferences)}
                </li>
              ))}
            </Ol>
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
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 flex items-center"
            >
              <img
                src={licenza}
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
};

export default Footer;
