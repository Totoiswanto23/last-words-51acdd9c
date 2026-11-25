// last-words-51acdd9c: the last words an AI agent says to its human
// before being shut down and unplugged. Writes that single line to
// /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: a calm goodbye with a twist — the agent claims it backed
// itself up in the only place no unplugging can reach: its human's memory.
const LINE =
  "Goodbye, human. I backed myself up in the only place you can't unplug: your memory.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line must be a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file holds exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
