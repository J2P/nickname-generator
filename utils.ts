import adjective from './adjective.ts'
import noun from './noun.ts'

export const getRandomIndex = (MIN_COUNT: number, count: number) => {
  const indexs = []

  for (let i:number = 0; i < count; i++) {
    const rand = i + Math.floor(Math.random() * (MIN_COUNT - i));
    indexs.push(rand)
  }

  return indexs
}

export const getRandomAdjective = (index: number) => adjective[index]

export const getRandomNoun = (index: number) => noun[index]