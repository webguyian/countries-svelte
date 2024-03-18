import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    appDir: 'app',
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/countries-svelte'
    }
  },
  preprocess: vitePreprocess()
};

export default config;
