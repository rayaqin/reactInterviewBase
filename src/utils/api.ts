import { Character, Location } from './types'

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(endpoint)
  return response.json() as T
}

export const searchCharacter = async (name: string): Promise<Character[]> => {
  const response = await fetchData<{ results: Array<Character> }>(
    `https://rickandmortyapi.com/api/character?name=${name}`
  )
  return response.results
}

export const getLocationResidentPromises = (
  urlsForResidentRequests: string[]
): Promise<Character>[] => {
  return urlsForResidentRequests.map((url: string) => {
    return fetchData<Character>(url)
  })
}

export const getResidents = async (locationResidentsPromises: Promise<Character>[]) => {
  const residents: Character[] = []
  for (const residentPromise of locationResidentsPromises) {
    const resident: Character = await residentPromise
    residents.push(resident)
  }
  return residents
}

export const getLocation = async (locationId: string): Promise<Location> => {
  return await fetchData(`https://rickandmortyapi.com/api/location/${locationId}`)
}
