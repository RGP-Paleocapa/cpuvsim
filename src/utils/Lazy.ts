// src/utils/delay.ts
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
