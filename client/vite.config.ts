import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'sass-embedded': 'sass',
    },
  },
});
