import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define and export the Vite configuration
export default defineConfig({
  build: {
    // Specify any Rollup options here
    rollupOptions: {
      // Example of externalizing nav.js
      external: ['/nav.js'],
    },
  },
  // Add plugins array for Vite plugins like @vitejs/plugin-react
  plugins: [
    react(),
  ],
});
