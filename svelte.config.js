import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, defineMDSveXConfig } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex(
      defineMDSveXConfig({
        extensions: ['.md'],
        layout: {},
      })
    ),
  ],
  kit: {
    adapter: adapter({
      out: 'build',
      precompress: false,
      envPrefix: '',
      polyfill: true,
    }),
  },
};

export default config;
