
function SearchBar({ search, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Pesquisar por nome ou ID..."
      value={search}
      onChange={(event) => onSearch(event.target.value)}
    />
  )
}

export default SearchBar
