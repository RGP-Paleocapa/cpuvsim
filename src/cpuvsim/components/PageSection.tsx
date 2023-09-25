import React, { ReactNode, useEffect, useRef } from "react";

interface PageSectionProps {
  items: ReactNode[];
}

const PageSection: React.FC<PageSectionProps> = ({ items }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="page-section bg-gray-900 dark:bg-gray-800 text-white p-4 rounded-lg shadow-lg"
    >
      {items.map((item, index) => (
        <div key={index} className="page-section-item mb-4">
          {item}
        </div>
      ))}
    </div>
  );
};

export default PageSection;
