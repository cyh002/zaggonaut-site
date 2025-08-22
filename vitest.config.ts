import { defineConfig } from 'vitest/config';
import { compile } from '@astrojs/compiler';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [
    {
      name: 'astro-vitest',
      async load(id) {
        if (id.endsWith('.astro')) {
          const filePath = fileURLToPath(new URL(id, import.meta.url));
          const code = await readFile(filePath, 'utf-8');
          const result = await compile(code, {
            sourcefile: id,
            sourcemap: 'inline',
          });
          return result.code;
        }
      },
    },
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    server: {
      deps: {
        inline: ['**/*.astro'],
      },
    },
    alias: {
      'astro:content': new URL('src/mocks/astro-content.ts', import.meta.url).pathname,
    },
  },
});