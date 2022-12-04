import fs from 'fs'

export const readFile = (name, splitRules = '\n') => fs.readFileSync(`../input/${name}.txt`, 'utf8').split(splitRules)

