import { readLines } from './utils/readLines.js';

const input = readLines('06')[0];

const findGroupOfUniqueCharacters = (groupsSize, str = input) => {
  for (let i = 0; i < str.length; i += 1) {
    const group = str.slice(i, i + groupsSize);
    const uniqueCharacters = new Set(group);

    if (uniqueCharacters.size === groupsSize) {
      return i + groupsSize;
    }
  }

  return -1;
};

const part1 = findGroupOfUniqueCharacters(4);
const part2 = findGroupOfUniqueCharacters(14);

console.log('Day 06:', { part1, part2 });

export { part1, part2 };
