import { readFile } from './utils/readLines.js'

const input = readFile('04')
  .map(e => e.split(',')
    .map(e => e.split('-')
      .map(Number)))

const amount = {
  part1: 0,
  part2: 0
}

// PART 1
input.forEach(([r1, r2], idx) => {
  const range1 = Array.from({ length: r1.at(-1) - r1.at(0) + 1 }, (_, i) => i + r1.at(0))
  const range2 = Array.from({ length: r2.at(-1) - r2.at(0) + 1 }, (_, i) => i + r2.at(0))

  // PART 1
  if (range1.every(e => range2.includes(e)) || range2.every(e => range1.includes(e))) {
    amount.part1 += 1
  }

  // PART 2
  if (range1.some(e => range2.includes(e)) || range2.some(e => range1.includes(e))) {
    amount.part2 += 1
  }
})

console.log(amount)
