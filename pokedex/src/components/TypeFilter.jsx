
function TypeFilter({ types, selectedType, onTypeChange }) {
  return (
    <select
      value={selectedType}
      onChange={(event) => onTypeChange(event.target.value)}
    >
      <option value="">Todos os tipos</option>

      {types.map((type) => (
        <option key={type.id} value={type.name}>
          {type.name}
        </option>
      ))}
    </select>
  )
}

export default TypeFilter
