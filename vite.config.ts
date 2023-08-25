import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'QR Code',
        short_name: 'QR Coder',
        description: 'A simple QR generator app',
        theme_color: '#4158db',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'favicon.ico',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
