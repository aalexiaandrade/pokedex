
import TrainerCard from './TrainerCard'

function TrainerList({ trainers, pokemonList }) {
  return (
    <section className="trainer-list">
      {trainers.map((trainer) => (
        <TrainerCard
          key={trainer.id}
          trainer={trainer}
          pokemonList={pokemonList}
        />
      ))}
    </section>
  )
}

export default TrainerList
