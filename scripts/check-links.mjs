// Checks every internal link, image and asset reference in the built site (run `npm run build` first).
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url)); // copes with spaces in the folder path
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : path.endsWith('.html') ? [path] : [];
});

let checked = 0;
const problems = [];
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const srcset of html.matchAll(/srcset="([^"]+)"/g)) refs.push(...srcset[1].split(',').map((s) => s.trim().split(' ')[0]));
  for (const ref of refs) {
    if (!ref.startsWith('/')) continue; // external, mailto:, #anchors
    const [path, hash] = ref.split('?')[0].split('#');
    const cleanPath = decodeURIComponent(path.split('#')[0]);
    const target = cleanPath.endsWith('/') ? join(dist, cleanPath, 'index.html') : join(dist, cleanPath);
    checked += 1;
    if (!existsSync(target)) problems.push(`${file}: missing ${ref}`);
    const anchor = ref.includes('#') ? ref.split('#')[1] : hash;
    if (anchor && existsSync(target) && !readFileSync(target, 'utf8').includes(`id="${anchor}"`)) {
      problems.push(`${file}: anchor #${anchor} not found in ${cleanPath}`);
    }
  }
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${file}: missing <title>`);
  if (/<img(?![^>]*\salt[\s=>])/.test(html)) problems.push(`${file}: image without alt attribute`);
}
console.log(`Checked ${checked} internal references.`);
if (problems.length) { console.log(problems.join('\n')); process.exit(1); }
console.log('No broken links, images or anchors found.');
