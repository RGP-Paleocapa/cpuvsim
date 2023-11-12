import React from 'react';

interface Reference {
  text: string;
  link: string;
  subReferences?: Reference[];
}

interface ReferencesProps {
  references: Reference[];
}

const References: React.FC<ReferencesProps> = ({ references }) => {
  const renderReferences = (refList: Reference[]) => (
    <ul className="list-disc pl-5 text-gray-900 dark:text-gray-100">
      {refList.map((reference, index) => (
        <li key={index}>
          <a
            href={reference.link}
            className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {reference.text}
          </a>
          {reference.subReferences && renderReferences(reference.subReferences)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-left mb-8 p-4 rounded">
      <p className="mb-2">References & Helpful Links:</p>
      {renderReferences(references)}
    </div>
  );
};

export default References;
