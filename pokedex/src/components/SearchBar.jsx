
function SearchBar({ search, onSearch }) {
  return (
    <input
      className="game-input"
      type="text"
      placeholder="Pesquisar por nome ou ID..."
      value={search}
      onChange={(event) => onSearch(event.target.value)}
    />
  )
}

export default SearchBar
