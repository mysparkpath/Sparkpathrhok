import initialDeck from '../static/spark_paths'

export const initialDeckState = {
  initial: initialDeck.paths.sort(() => -1),
  no: [],
  maybe: [],
  yes: [],
  totalCount: initialDeck.paths.length,
}
