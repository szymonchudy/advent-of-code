import fs from 'fs'

export const readFile = (name) => fs.readFileSync(`../input/${name}.txt`, 'utf8').split('\n')

