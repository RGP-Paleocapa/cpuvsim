// useDocumentMetadata.ts
import { useEffect } from 'react';

function useDocumentMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    // You can add more metadata properties here as needed
  }, [title, description]);
}

export default useDocumentMetadata;
