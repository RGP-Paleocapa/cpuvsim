// useDocumentMetadata.ts

import { useEffect } from 'react';

const useDocumentMetadata = (title: string, description: string, additionalTags?: Record<string, string>) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);

      // Handle additional metadata tags
      if (additionalTags) {
        Object.entries(additionalTags).forEach(([name, content]) => {
          let metaTag = document.querySelector(`meta[name="${name}"]`);
          if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute('name', name);
            document.head.appendChild(metaTag);
          }
          metaTag.setAttribute('content', content);
        });
      }
    }
  }, [title, description, additionalTags]);
}

export default useDocumentMetadata;
