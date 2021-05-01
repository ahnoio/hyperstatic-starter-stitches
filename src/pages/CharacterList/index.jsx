import { container, grid } from '/src/styles/utils.css'
import { Link, loadStatic } from 'hyperstatic'

import { css } from '/src/styles/stitches.config'

const HandleCharacters = (state, data) => ({
  ...state,
  characterlist: state.characterlist.concat(data)
})

// Fetch characters
export const init = (state) => [
  {
    ...state,
    characterlist: []
  },
  loadStatic({
    loader: async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character`)
      const data = await response.json()
      const simplified = data.results.map((character) => ({
        id: character.id,
        name: character.name,
        image: character.image,
        species: character.species,
        status: character.status,
      }))
      return simplified
    },
    action: HandleCharacters,
    error: (state) => state
  })
]

// View
const card = css({
  display: 'block',
  padding: '1rem',
  border: '1px solid $divider',
  borderRadius: '0.25rem',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '$altBackground',
  },
})
const cardTitle = css({
  margin: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

const CharacterList = (state) => (
  <div className={container}>
    <h2>Data fetching example</h2>
    <h4>Rick and Morty characters</h4>
    <div className={grid}>
      {state.characterlist.map((character) => (
        <Link className={card} href={`/characters/${character.id}`}>
          {({ status }) => (
            <span>
              <h4 className={cardTitle}>{character.name}</h4>
              <small>
                {character.species} - {character.status} - {status}
              </small>
            </span>
          )}
        </Link>
      ))}
    </div>
  </div>
)

export default CharacterList
