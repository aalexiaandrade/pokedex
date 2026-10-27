
import { getPokemonImage } from '../utils/pokemonImages'

function PokemonCard({ pokemon, onSelect }) {
  return (
    <article
      className="pokemon-card"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect()
        }
      }}
    >
      <img
        className="pokemon-image"
        src={getPokemonImage(pokemon.id)}
        alt={pokemon.name}
        loading="lazy"
      />

      <span className="pokemon-number">
        Nº {String(pokemon.id).padStart(3, '0')}
      </span>

      <h2>{pokemon.name}</h2>

      <div className="pokemon-types">
        {pokemon.types.map((type) => (
          <span
            className={`type-badge type-${type.name.toLowerCase()}`}
            key={type.id}
          >
            {type.name}
          </span>
        ))}
      </div>

      <div className="pokemon-quick-stats">
        <span>HP {pokemon.stats.hp}</span>
        <span>ATK {pokemon.stats.attack}</span>
        <span>DEF {pokemon.stats.defense}</span>
      </div>
    </article>
  )
}

export default PokemonCard
