import { Ol, Pre } from '@/components/features/eBook/content';
import React from 'react';

interface ProblemData {
  title?: string;
  text?: string;
  code?: string | string[];
  link?: string;
}

interface ProblemComponentProps {
  problem: ProblemData;
  index: number;
}

const ProblemComponent: React.FC<ProblemComponentProps> = ({ problem, index }) => {
  const renderTextWithLinks = (text: string, link: string | undefined) => {
    const parts = text.split(/(https?:\/\/\S+)/); // Split by HTTP links while preserving them

    return parts.map((part, index) => {
      if (link && part.startsWith('http://') || part.startsWith('https://')) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        );
      } else {
        return (
          <span key={index}>{part}</span>
        );
      }
    });
  };

  return (
    <div key={index} className="w-full p-4">
      <div className="flex flex-col items-center lg:flex-row lg:items-start ">
        <div className="w-3/4">
          {(problem.text || problem.code) && (
            <Ol start={index + 1} className="dark:text-white max-w-full">
              {problem.text && (
                <li>
                  {renderTextWithLinks(problem.text, problem.link)}
                </li>
              )}
              {Array.isArray(problem.code) && (
                <li>
                  <strong>{problem.title}</strong>
                  <Pre content={problem.code.join('\n')} />
                </li>
              )}
            </Ol>
          )}
        </div>
        <div className="w-1/4 mt-2 md:mt-0 flex justify-center mb-5">
          {problem.link ? (
            <a
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 border-2 border-blue-500 dark:border-blue-800 text-gray-900 hover:text-blue-500 dark:hover:text-blue-800 ml-2 px-3 py-1 rounded max-w-sm"
          >
            Solution
          </a>
          
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProblemComponent;
