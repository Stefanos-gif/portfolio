import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x'
    })
  }
};