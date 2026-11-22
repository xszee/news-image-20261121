// news-image-20261121 entry (Node 22, standard library only).
// The entry image is entry.png beside this file: a full newspaper
// front page for Saturday 21 November 2026. The program copies it
// to /output/entry.png, which is exactly what the judge sees.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in
// for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
copyFileSync(src, join(outDir, 'entry.png'));
