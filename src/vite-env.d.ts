/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Add other environment variables as needed
  }

  declare module 'react-rating-stars-component';
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  