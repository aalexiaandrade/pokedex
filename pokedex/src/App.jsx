
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
  const [trainerSearch, setTrainerSearch] = useState('')
  const [trainerBadgeFilter, setTrainerBadgeFilter] = useState('all')

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

  const filteredTrainers = pokedexData.trainers.filter((trainer) => {
    const searchText = trainerSearch.trim().toLowerCase()

    const matchesName = trainer.name
      .toLowerCase()
      .includes(searchText)

    const matchesBadges =
      trainerBadgeFilter === 'all' ||
      (trainerBadgeFilter === '0-3' &&
        trainer.badges >= 0 && trainer.badges <= 3) ||
      (trainerBadgeFilter === '4-6' &&
        trainer.badges >= 4 && trainer.badges <= 6) ||
      (trainerBadgeFilter === '7+' && trainer.badges >= 7)

    return matchesName && matchesBadges
  })


  return (
    <main>
      <h1>Minha Pokédex</h1>

      <nav className="main-navigation">
        <button
          className={!showTrainers ? 'active' : ''}
          onClick={() => {
            setShowTrainers(false)
            setSelectedPokemon(null)
          }}
        >
          Pokédex
        </button>

        <button
          className={showTrainers ? 'active' : ''}
          onClick={() => {
            setShowTrainers(true)
            setSelectedPokemon(null)
          }}
        >
          Treinadores
        </button>
      </nav>

      {showTrainers ? (
        <>
          <section className="filter-panel">
            <div className="filter-heading">
              <span className="section-kicker">TRAINER DATABASE</span>
              <h2>Treinadores</h2>
              <p>Encontre treinadores e confira suas equipes.</p>
            </div>

            <input
              className="game-input"
              type="text"
              placeholder="Pesquisar treinador..."
              value={trainerSearch}
              onChange={(event) => setTrainerSearch(event.target.value)}
            />

            <select
              className="game-select"
              value={trainerBadgeFilter}
              onChange={(event) => setTrainerBadgeFilter(event.target.value)}
            >
              <option value="all">Todas as quantidades de insígnias</option>
              <option value="0-3">De 0 a 3 insígnias</option>
              <option value="4-6">De 4 a 6 insígnias</option>
              <option value="7+">7 ou mais insígnias</option>
            </select>

            <p className="results-count">
              {filteredTrainers.length} treinador(es) encontrado(s)
            </p>
          </section>

          {filteredTrainers.length > 0 ? (
            <TrainerList
              trainers={filteredTrainers}
              pokemonList={pokemonList}
            />
          ) : (
            <p className="empty-state">
              Nenhum treinador encontrado. Tente outros filtros!
            </p>
          )}
        </>
      ) : selectedPokemon ? (
        <PokemonDetails
          pokemon={selectedPokemon}
          onBack={() => setSelectedPokemon(null)}
        />
      ) : (
        <>
          <section className="filter-panel">
            <div className="filter-heading">
              <span className="section-kicker">POKÉMON DATABASE</span>
              <h2>Explore os Pokémon</h2>
              <p>Pesquise por nome ou número e filtre por tipo.</p>
            </div>

            <SearchBar
              search={search}
              onSearch={setSearch}
            />

            <TypeFilter
              types={types}
              selectedType={selectedType}
              onTypeChange={setSelectedType}
            />

            <p className="results-count">
              {filteredPokemon.length} Pokémon encontrado(s)
            </p>
          </section>

          {filteredPokemon.length > 0 ? (

            <PokemonList
              pokemonList={filteredPokemon}
              onSelectPokemon={setSelectedPokemon}
            />

          ) : (
            <p className="empty-state">
              Nenhum Pokémon encontrado. Tente outros filtros!
            </p>
          )}
        </>
      )}

    </main>
  )
}


export default App
