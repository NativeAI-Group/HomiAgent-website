import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await Promise.all(['index.html', 'styles.css', 'app.js'].map(file => copyFile(file, `dist/${file}`)));
await cp('assets', 'dist/assets', { recursive: true });
console.log('Built HomiAgent website → dist/');
