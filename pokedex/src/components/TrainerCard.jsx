
function TrainerCard({ trainer, pokemonList }) {
  const trainerPokemon = pokemonList.filter((pokemon) =>
    trainer.pokemonIds.includes(pokemon.id)
  )

  return (
    <article className="trainer-card">
      <h2>{trainer.name}</h2>

      <p>
        <strong>Insígnias:</strong> {trainer.badges}
      </p>

      <h3>Pokémon relacionados</h3>

      {trainerPokemon.length > 0 ? (
        <ul>
          {trainerPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              #{pokemon.id} - {pokemon.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum Pokémon relacionado encontrado.</p>
      )}
    </article>
  )
}

export default TrainerCard
