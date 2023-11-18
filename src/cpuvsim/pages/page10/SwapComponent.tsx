import React, { useState, useCallback } from 'react';

// Define a TypeScript interface for the container
interface Container {
  id: string;
  content: string;
}

// Your initial containers
const initialContainers: Container[] = [
  { id: 'container-1', content: 'Container 1' },
  { id: 'container-2', content: 'Container 2' },
  { id: 'container-3', content: 'Container 3' },
  // ... other containers
];

// TypeScript interface for DraggableContainer props
interface DraggableContainerProps {
  container: Container;
  index: number;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
}

const DraggableContainer: React.FC<DraggableContainerProps> = ({ container, index, onDragStart, onDrop, onDragOver }) => (
  <div
    key={container.id}
    onDragStart={e => onDragStart(e, index)}
    onDragOver={onDragOver}
    onDrop={e => onDrop(e, index)}
    draggable
    className="bg-blue-100 dark:bg-blue-800 border border-blue-300 dark:border-blue-700 p-4 rounded-lg"
  >
    {container.content}
  </div>
);

const DraggableContainerGrid: React.FC = () => {
  const [containers, setContainers] = useState<Container[]>(initialContainers);

  const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('index', index.toString());
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>, newIndex: number) => {
    e.preventDefault();
    const draggedIndexStr = e.dataTransfer.getData('index');
    const draggedIndex = parseInt(draggedIndexStr, 10);

    if (!isNaN(draggedIndex)) {
      const newContainers = [...containers];
      const [draggedContainer] = newContainers.splice(draggedIndex, 1);
      newContainers.splice(newIndex, 0, draggedContainer);
      setContainers(newContainers);
    }
  }, [containers]);

  const allowDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div className="container max-w-md bg-red-400 mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 text-center">
        {containers.map((container, index) => (
          <DraggableContainer
            key={container.id}
            container={container}
            index={index}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragOver={allowDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableContainerGrid;
