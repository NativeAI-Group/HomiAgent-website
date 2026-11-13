import { cp, rm } from 'node:fs/promises';

const source = new URL('../src/', import.meta.url);
const output = new URL('../dist/', import.meta.url);

// Always publish a fresh copy, including removal of obsolete assets.
await rm(output, { recursive: true, force: true });
await cp(source, output, { recursive: true });
console.log('Built HomiAgent website → dist/');
