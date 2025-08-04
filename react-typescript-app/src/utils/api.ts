// Issue: Function returns any instead of using generics
export const fetchData = async (endpoint: string): Promise<any> => {
  const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}`)
  return response.json()
}

// Issue: No URL encoding for user input
export const searchCharacter = async (name: string) => {
  // Intentionally not encoding the name parameter
  const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
  return response.json()
}

// Issue: Non-awaited promise in try-catch
export const fetchCharacterAndEpisodes = async (characterId: number) => {
  try {
    const character = await fetchData(`character/${characterId}`)
    // Promise not awaited intentionally
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

// Issue: Error-prone operation not in try-catch
export const getLocationResidents = async (locationId: number) => {
  const location = await fetchData(`location/${locationId}`)
  // This could fail if location is undefined or doesn't have residents
  if (!location?.residents) return []
  return location.residents.map((url: string) => {
    const id = url.split('/').pop()
    return fetchData(`character/${id}`)
  })
}
