// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      // force Vercel to use Node.js 20.x for all functions
      runtime: 'nodejs20.x'
    })
  }
};

export default config;
