
function PokemonDetails({ pokemon, onBack }) {
  return (
    <section className="pokemon-details">
      <button onClick={onBack}>
        Voltar para a Pokédex
      </button>

      <h2>
        #{pokemon.id} - {pokemon.name}
      </h2>

      <h3>Tipos</h3>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.id}>{type.name}</li>
        ))}
      </ul>

      <h3>Status</h3>
      <p>HP: {pokemon.stats.hp}</p>
      <p>Ataque: {pokemon.stats.attack}</p>
      <p>Defesa: {pokemon.stats.defense}</p>
      <p>Ataque especial: {pokemon.stats.specialAttack}</p>
      <p>Defesa especial: {pokemon.stats.specialDefense}</p>
      <p>Velocidade: {pokemon.stats.speed}</p>
    </section>
  )
}

export default PokemonDetails
