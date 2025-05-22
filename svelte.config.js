import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // enable svelte-preprocess (PostCSS, SCSS, etc.)
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      // Vercel supports nodejs16.x, nodejs18.x, and nodejs20.x—
      // pin to Node 20 to avoid the “invalid runtime” error
      runtime: 'nodejs20.x'
    })
  }
};

export default config;
