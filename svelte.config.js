import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // enable svelte-preprocess (e.g. PostCSS, SCSS, etc.)
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      // explicitly target a supported Node.js runtime
      runtime: 'nodejs18.x'
    })
  }
};

export default config;
