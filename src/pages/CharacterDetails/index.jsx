import { container } from '/src/styles/utils.css'
import { loadStatic } from 'hyperstatic'

import { css } from '/src/styles/stitches.config'

const HandleCharacter = (state, data) => ({
  ...state,
  characters: {
    ...state.characters,
    [data.id]: data
  }
})

// Fetch characters details
export const init = (state, location) => [
  {
    ...state,
    characters: state.characters ?? {}
  },
  loadStatic({
    loader: async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${location.params.id}`
      )
      const { episode, ...data } = await response.json()
      return data
    },
    action: HandleCharacter,
    error: (state) => state
  }),
]

// View
const wrapper = css({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridGap: '1rem',
})
const infoGrid = css({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridGap: '0.25rem 1rem',
})

const CharacterDetails = (state) => {
  const character = state.characters[state.location.params.id]

  if (!character) {
    return (
      <div className={container}>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className={container}>
      <h2>{character.name}</h2>
      <div className={wrapper}>
        <img
          width="200"
          height="200"
          src={character.image}
          alt={character.name}
        />
        <div>
          <div className={infoGrid}>
            <span>Status:</span>
            <span>{character.status}</span>
            <span>Species:</span>
            <span>{character.species}</span>
            {character.type && <span>Type:</span>}
            {character.type && <span>{character.type}</span>}
            <span>Origin:</span>
            <span>{character.origin.name}</span>
            <span>Location:</span>
            <span>{character.location.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CharacterDetails
