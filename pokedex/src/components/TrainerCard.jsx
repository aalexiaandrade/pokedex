
import { getPokemonImage } from '../utils/pokemonImages'

function TrainerCard({ trainer, pokemonList }) {
  const trainerPokemon = trainer.pokemonIds
    .map((id) =>
      pokemonList.find((pokemon) => pokemon.id === id)
    )
    .filter(Boolean)

  return (
    <section className="trainer-details">
      <header className="trainer-header">
        <h2>{trainer.name}</h2>

        <p>
          {trainer.badges} {trainer.badges === 1
            ? 'insígnia conquistada'
            : 'insígnias conquistadas'}
        </p>
      </header>

      <h3 className="trainer-team-title">
        Equipe Pokémon
      </h3>

      <div className="trainer-pokemon-list">
        {trainerPokemon.map((pokemon) => (
          <article
            className="trainer-pokemon-card"
            key={pokemon.id}
          >
            <img
              src={getPokemonImage(pokemon.id)}
              alt={pokemon.name}
              loading="lazy"
            />

            <span className="pokemon-number">
              Nº {String(pokemon.id).padStart(3, '0')}
            </span>

            <h4>{pokemon.name}</h4>

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

            <div className="trainer-pokemon-stats">
              <p>HP <strong>{pokemon.stats.hp}</strong></p>
              <p>Ataque <strong>{pokemon.stats.attack}</strong></p>
              <p>Defesa <strong>{pokemon.stats.defense}</strong></p>
              <p>Ataque especial <strong>{pokemon.stats.specialAttack}</strong></p>
              <p>Defesa especial <strong>{pokemon.stats.specialDefense}</strong></p>
              <p>Velocidade <strong>{pokemon.stats.speed}</strong></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TrainerCard
