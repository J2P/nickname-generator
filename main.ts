import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

import adjective from './adjective.ts'
import noun from './noun.ts'
import { getRandomIndex, getRandomAdjective, getRandomNoun } from './utils.ts'

function handler(req) {
  const count = Deno.args[0];
  const MIN_COUNT = Math.min(adjective.length, noun.length)
  const selectedAdjective = []
  const selectedNoun = []
  const nicknames = []

  if (+count > +MIN_COUNT) {
    console.log('넘으면 안돼')
    return
  }

  const randomIndex = getRandomIndex(MIN_COUNT, +count)

  for (let i = 0; i < randomIndex.length; i++) {
    selectedAdjective.push(getRandomAdjective(randomIndex[i]))
    selectedNoun.push(getRandomNoun(randomIndex[i]))
  }

  for (let j = 0; j < selectedAdjective.length; j++) {
    for (let k = 0; k < selectedNoun.length; k++) {
      nicknames.push(`${selectedAdjective[j]} ${selectedNoun[k]}`)
    }
  }

  return new Response(nicknames.join(','));
}

console.log("Listening on http://localhost:8000");
await listenAndServe(":8000", handler);