import usePokemon from '../hooks/usePokemon'
import AgGridTables from './AgGridTables'

interface PokemonDisplayProps {
  nameOfPokemon: string
}

const PokemonDisplay: React.FC<PokemonDisplayProps> = ({ nameOfPokemon }) => {
  const { data, isLoading, error } = usePokemon(nameOfPokemon)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="w-full h-full">
      {data?.abilities && data?.held_items && <AgGridTables pokemonData={data} />}
    </div>
  )
}

export default PokemonDisplay
