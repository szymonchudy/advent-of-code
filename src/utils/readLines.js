import fs from 'fs';

const readFile = (name, splitRules = '\n') => fs.readFileSync(`input/${name}.txt`, 'utf8').split(splitRules);

export default readFile;
