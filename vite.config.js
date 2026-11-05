import { defineConfig } from 'vite';

// base './' keeps asset paths relative so the build works on any static host / sub-path.
export default defineConfig({ base: './' });
