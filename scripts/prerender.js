/**
 * Prerenderizado estático (SEO).
 * 1. `vite build` genera el cliente en dist/
 * 2. `vite build --ssr` genera dist-ssr/entry-server.js
 * 3. Este script inyecta el HTML renderizado en dist/index.html
 */
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'dist', 'index.html');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const template = await readFile(indexPath, 'utf-8');
const placeholder = '<!--app-html-->';

if (!template.includes(placeholder)) {
  throw new Error(`No se encontró "${placeholder}" en dist/index.html`);
}

const appHtml = render();
await writeFile(indexPath, template.replace(placeholder, appHtml));
await rm(ssrDir, { recursive: true, force: true });

console.log(`✓ Prerenderizado: ${(appHtml.length / 1024).toFixed(1)} kB de HTML inyectados en dist/index.html`);
