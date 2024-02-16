import React, { useState, useCallback } from 'react';

// Define a TypeScript interface for the container
interface Container {
  id: string;
  content: string;
}

// TypeScript interface for DraggableContainer props
interface DraggableContainerProps {
  container: Container;
  index: number;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
}

// TypeScript interface for DraggableContainerGrid props
interface DraggableContainerGridProps {
  initialContainers: Container[];
}

// Function to calculate the register number
const getRegisterNumber = (index: number): string => {
  return (index * 2).toString().padStart(2, '0');
}

const DraggableContainer: React.FC<DraggableContainerProps> = ({ container, index, onDragStart, onDrop, onDragOver }) => (
  <div className="flex items-center bg-blue-100 dark:bg-blue-800 overflow-hidden border-t border-blue-300 dark:border-blue-700">
    <div className="w-12 h-12 bg-gray-200 text-center">
      <div className="flex items-center justify-center h-full">{getRegisterNumber(index)}</div>
    </div>
    <div
      key={container.id}
      onDragStart={e => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={e => onDrop(e, index)}
      draggable
      className="flex-1 border-l border-blue-300 dark:border-blue-700 p-2 dark:text-gray-200"
    >
      {container.content}
    </div>
  </div>
);

const DraggableContainerGrid: React.FC<DraggableContainerGridProps> = ({ initialContainers }) => {
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
    <div className="container mx-auto">
      <div className="flex flex-col text-center">
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
