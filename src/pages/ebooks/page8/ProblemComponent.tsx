import { ListItem, OrderedList, Pre } from '@/components/features/eBook/typography';
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
            className="text-blue-600 dark:text-blue-400 underline"
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
    <div key={index} className="w-full p-4 overflow-auto">
      <div className="flex flex-col items-center lg:flex-row lg:items-center py-10">
        <div className="w-full lg:w-3/4 3xl:w-11/12">
          {(problem.text || problem.code) && (
            <OrderedList start={index + 1} className="dark:text-white max-w-full">
              {problem.text && (
                <ListItem>
                  {renderTextWithLinks(problem.text, problem.link)}
                </ListItem>
              )}
              {Array.isArray(problem.code) && (
                <ListItem noParagraph>
                  <strong>{problem.title}</strong><br />
                  <br />
                  <Pre content={problem.code.join('\n')} />
                </ListItem>
              )}
            </OrderedList>
          )}
        </div>
        <div className="w-auto lg:w-1/4 3xl:w-1/12 mt-2 md:mt-0 flex justify-center mb-5">
          {problem.link ? (
            <a
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 border-2 border-blue-500 dark:border-blue-800 text-gray-900 hover:text-blue-500 dark:hover:text-blue-800 ml-2 px-3 py-1 rounded max-w-sm"
          >
            Solution
          </a>

          ) : (
            <a
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled
            className="bg-gray-100 border-2 border-blue-5000 text-gray-900 ml-2 px-3 py-1 rounded max-w-sm"
          >
            No Solution
          </a>
          )}
        </div>
      </div>
      <hr className='border-red-500' />
    </div>
  );
};

export default ProblemComponent;
