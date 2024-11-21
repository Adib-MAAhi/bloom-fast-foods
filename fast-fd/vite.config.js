import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
/*export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // You can keep this as it is
  },
  server: {
    port: process.env.PORT || 3000,  // Use the PORT provided by Render or fallback to 3000
    host: '0.0.0.0',  // Bind the server to all network interfaces
  },
});*/

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,  
    host: '0.0.0.0',  
  }
});

