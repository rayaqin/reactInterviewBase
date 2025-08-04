export const fetchData = async (endpoint: string): Promise<any> => {
  const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}`)
  return response.json()
}

export const searchCharacter = async (name: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
  return response.json()
}

export const fetchCharacterAndEpisodes = async (characterId: number) => {
  try {
    const character = await fetchData(`character/${characterId}`)
    const episodes = character.episode.map((url: string) => fetch(url).then((res) => res.json()))
    return {
      ...character,
      episodes: episodes,
    }
  } catch (error) {
    console.error('Error fetching character:', error)
    return null
  }
}

export const getLocationResidents = async (locationId: string) => {
  const location = await fetchData(`location/${locationId}`)
  return location.residents.map((url: string) => {
    const id = url.split('/').pop()
    return fetchData(`character/${id}`)
  })
}
