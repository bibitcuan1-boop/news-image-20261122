// News-image entry for 22 November 2026 (Node 22, standard library only).
// The image is entry.png beside this file. The program copies it to the
// output directory the grader provides: /output, or MAKEFUN_OUTPUT_DIR
// when run outside the grader's container (mkdir -p out &&
// MAKEFUN_OUTPUT_DIR=out node main.ts). A straight copy, so two runs
// always write identical bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
const src = fileURLToPath(new URL('./entry.png', import.meta.url));
copyFileSync(src, join(outDir, 'entry.png'));
