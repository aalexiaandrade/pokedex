
import PokemonCard from './PokemonCard'

function PokemonList({ pokemonList, onSelectPokemon }) {
  return (
    <section className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onSelect={() => onSelectPokemon(pokemon)}
        />
      ))}
    </section>
  )
}

export default PokemonList
