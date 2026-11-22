// news-image-20261121 — entry program (Node 22, standard library only).
//
// The entry image lives beside this file as entry.png: a full newspaper
// front page for Saturday 21 November 2026. All this program does is
// copy that image to the output directory, which is exactly what the
// judge looks at.
//
// Inside the grader's container the output directory is /output. When
// running it locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const destination = join(outputDir, 'entry.png');
// The copied bytes are the entry: the judge sees exactly this file.
copyFileSync(source, destination);
