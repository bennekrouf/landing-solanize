export { };

declare global {
  interface Window {
    // Plausible Analytics
    plausible?: {
      (event: string, options?: { props?: Record<string, string> }): void;
      q?: Array<unknown>;
    };
  }
}
