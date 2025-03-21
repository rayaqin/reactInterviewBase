import { useQuery } from '@tanstack/react-query'

const usePokemon = (nameOfPokemon: string) => {
  return useQuery({
    queryKey: ['pokemon', nameOfPokemon],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`)
        .then((res) => res.json())
        .catch((err) => {
          console.error(err)
          return null
        }),
  })
}

export default usePokemon
