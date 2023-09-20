import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../components/UseDocumentMetadata';

type Container = {
  id: string;
  content: string;
};

const initialContainers: Container[] = [
  { id: 'container-1', content: 'Container 1' },
  { id: 'container-2', content: 'Container 2' },
  { id: 'container-3', content: 'Container 3' },
  { id: 'container-4', content: 'Container 4' },
  { id: 'container-5', content: 'Container 5' },
];

const Page1: React.FC = () => {
  const [containers, setContainers] = useState<Container[]>(initialContainers);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('index', index.toString());
  };

  const handleDrop = (e: React.DragEvent, newIndex: number) => {
    e.preventDefault();
    const draggedIndexStr = e.dataTransfer.getData('index');
    const draggedIndex = parseInt(draggedIndexStr, 10);

    if (isNaN(draggedIndex)) {
      return;
    }

    const newContainers = [...containers];
    const [draggedContainer] = newContainers.splice(draggedIndex, 1);
    newContainers.splice(newIndex, 0, draggedContainer);

    setContainers(newContainers);
  };

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault();
  };

  useDocumentMetadata('Page 1 - My App', 'This is the first page.');

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 text-gray-800 dark:text-white">
        Page 1
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {containers.map((container, index) => (
          <div
            key={container.id}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => allowDrop(e)}
            onDrop={(e) => handleDrop(e, index)}
            draggable
            className={`bg-blue-100 dark:bg-blue-800 border border-blue-300 dark:border-blue-700 p-4 rounded-lg`}
          >
            {container.content}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/cpuvsim/"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white inline-block mr-4"
        >
          Previous Page
        </Link>
        <Link
          to="/cpuvsim/page2"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-white inline-block"
        >
          Next Page
        </Link>
      </div>
    </div>
  );
};

export default Page1;
