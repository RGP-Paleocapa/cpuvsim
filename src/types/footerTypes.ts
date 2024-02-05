// src/types/footerTypes.ts
export interface FooterItem {
    text: string;
    link: string;
    subReferences?: FooterItem[];
  }
  