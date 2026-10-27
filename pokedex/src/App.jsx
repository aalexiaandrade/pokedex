
import { useState } from 'react'
import pokedexData from './data/pokedex-data.json'
import SearchBar from './components/SearchBar'
import TypeFilter from './components/TypeFilter'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import TrainerList from './components/TrainerList'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [showTrainers, setShowTrainers] = useState(false)

  const pokemonList = pokedexData.pokemon
  const types = pokedexData.types

  const filteredPokemon = pokemonList.filter((pokemon) => {
    const searchText = search.trim().toLowerCase()

    const matchesName = pokemon.name
      .toLowerCase()
      .includes(searchText)

    const matchesId =
      searchText !== '' &&
      String(pokemon.id) === searchText

    const matchesType =
      selectedType === '' ||
      pokemon.types.some(
        (type) => type.name === selectedType
      )

    return (matchesName || matchesId) && matchesType
  })


  return (
    <main>
      <h1>Minha Pokédex</h1>

    <nav className="main-navigation">
      <button onClick={() => setShowTrainers(false)}>
        Pokédex
      </button>

      <button onClick={() => setShowTrainers(true)}>
        Treinadores
      </button>
    </nav>

    {showTrainers ? (
      <TrainerList
        trainers={pokedexData.trainers}
        pokemonList={pokedexData.pokemon}
      />

      ) : (
        <>
          <SearchBar
            search={search}
            onSearch={setSearch}
          />

          <TypeFilter
            types={types}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />

          <p>
            Pokémon encontrados: {filteredPokemon.length}
          </p>

          {filteredPokemon.length > 0 ? (
            <PokemonList
              pokemonList={filteredPokemon}
              onSelectPokemon={setSelectedPokemon}
            />
          ) : (
            <p>Nenhum Pokémon encontrado.</p>
          )}
        </>
      )}
    </main>
  )
}


export default App
