import fs from 'fs';
import * as url from 'url';

// eslint-disable-next-line no-underscore-dangle
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const readFile = (name, splitRules = '\n') => fs
  .readFileSync(`${__dirname}/../../input/${name}.txt`, 'utf8')
  .split(splitRules);

export default readFile;
