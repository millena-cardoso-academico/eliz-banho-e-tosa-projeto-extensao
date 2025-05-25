/// <reference types="vite/client" />

interface ImportMeta {
  glob<T = any>(
    pattern: string,
    opts?: { eager: boolean }
  ): Record<string, { default: T }>;
}
