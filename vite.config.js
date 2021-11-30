//import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

// https://vitejs.dev/config/
const config = {
  //target: 'es2020',
  //brotliSize: false,
  //chunkSizeWarningLimit: 1500,

  plugins: [
    svelte({
      onwarn: (warning, handler) => {
        const { code, frame } = warning;
        if (code.startsWith('a11y') || code === 'css-unused-selector') return;
        handler(warning);
      },
      extensions: ['.svelte', '.svx', '.md'],
      preprocess: [
        sveltePreprocess(),
        mdsvex({
          layout: {
            markdown: './src/lib/LayoutMarkdown.svelte',
            page: './src/lib/LayoutPage.svelte',
            core: './src/lib/LayoutCore.svelte',
            _: './src/lib/LayoutMarkdown.svelte',
          },
          extensions: ['.svx', '.md'],
        }),
      ],
    }),
  ],
};

export default ({ command, mode }) => {
  if (command === 'build' && mode === 'deploy') {
    return {
      ...config,
      base: './',
    };
  } else {
    return {
      ...config,
      base: './',
    };
  }
};
