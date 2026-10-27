
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
      <h2>
        #{pokemon.id} - {pokemon.name}
      </h2>

      <p>HP: {pokemon.stats.hp}</p>
      <p>Ataque: {pokemon.stats.attack}</p>
      <p>Defesa: {pokemon.stats.defense}</p>
      <p>Ataque especial: {pokemon.stats.specialAttack}</p>
      <p>Defesa especial: {pokemon.stats.specialDefense}</p>
      <p>Velocidade: {pokemon.stats.speed}</p>
    </article>
  )
}

export default PokemonCard
