import { readFile } from './utils/readLines.js'

const input = readFile('03')

const letters = {}

for (const char of 'abcdefghijklmnopqrstuvwxyz') {
  letters[char] = char.charCodeAt(0) - 96
}

for (const char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  letters[char] = char.charCodeAt(0) - 38
}

const points = {
  part1: 0,
  part2: 0
}

// PART 1
input
  .map(str => [
    str.slice(0, str.length / 2).split(''),
    str.substring(str.length / 2).split('')
  ])
  .forEach(sack => {
    const intersection = sack[0].filter(e => sack[1].includes(e))
    const letter = intersection.filter((element, index) => intersection.indexOf(element) === index)[0]

    if (letter) {
      points.part1 += letters[letter]
    }
  })

// PART 2
input
  .reduce((acc, val) => {
      const split = val.split('')

      if (acc.length === 0 || acc[acc.length - 1].length === 3) {
        acc.push([split]);
      } else {
        acc[acc.length - 1].push(split);
      }

      return acc
    },
    [])
  .forEach(([elf1, elf2, elf3]) => {
    const intersection = elf1.filter(x => elf2.includes(x) && elf3.includes(x))
    const letter = intersection.filter((element, index) => intersection.indexOf(element) === index)[0]

    if (letter) {
      points.part2 += letters[letter]
    }
  })

console.log(points)
