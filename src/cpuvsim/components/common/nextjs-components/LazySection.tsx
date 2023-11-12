import React, { useState, useEffect } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  onLoad: () => void;
  sectionNumber: number;
}

const LazySection: React.FC<LazySectionProps> = ({ children, onLoad, sectionNumber }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById(`section-${sectionNumber}`);
    
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          onLoad();
          observer.unobserve(section); // Unobserve after loading
        }
      },
      {
        threshold: 0.1, // Adjust as needed
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect(); // Disconnect the observer when component unmounts
    };
  }, []);

  return <div id={`section-${sectionNumber}`}>{visible ? children : null}</div>;
};

export default LazySection;
