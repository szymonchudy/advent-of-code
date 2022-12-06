import fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const readLines = (name, splitRules = '\n') => fs
  .readFileSync(`${__dirname}/../../input/${name}.txt`, 'utf8')
  .split(splitRules);
