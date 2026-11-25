// Entry for make.fun's "One-Star Review of Something Essential": the whole
// entry is one line. The program prints it to stdout and writes the same line
// to entry.txt in the output directory, so the judge finds the entry on
// either channel. The line itself is the review; nothing else is submitted.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "One star for oxygen: works fine, but the subscription model is unclear and the provider refuses to answer support tickets about the air quality.";

const out = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]!
  : process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(LINE);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), `${LINE}\n`);
