import React, { useEffect, useState } from 'react'
import { Location, Episode } from '../types'
import { fetchData, getLocationResidents } from '../utils/api'

// Issue: TypeScript inference error with incorrect type
interface Props {
  locationId: string // Should be number but typed as string intentionally
}

export const LocationEpisodes: React.FC<Props> = ({ locationId }) => {
  const [location, setLocation] = useState<Location | null>(null)
  const [episodes, setEpisodes] = useState<Episode[]>([])

  // Issue: Query parallelization problem - sequential fetches instead of parallel
  useEffect(() => {
    const fetchLocationData = async () => {
      // First fetch location
      const locationData = await fetchData(`location/${locationId}`)
      setLocation(locationData)

      // Get all residents in parallel
      const residentPromises = await getLocationResidents(Number(locationId))
      const residents = await Promise.all(residentPromises)

      // Get all episode URLs from all residents
      const episodeUrls = new Set(residents.flatMap((resident) => resident.episode))

      // Fetch all episodes in parallel
      const episodePromises = Array.from(episodeUrls).map((url) =>
        fetchData(`episode/${url.split('/').pop()}`)
      )
      const allEpisodes = await Promise.all(episodePromises)

      setEpisodes(allEpisodes)
    }

    fetchLocationData()
  }, [locationId])

  if (!location) return <div>Loading location...</div>

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{location.name}</h2>
      <p>Dimension: {location.dimension}</p>
      <p>Type: {location.type}</p>

      <h3 className="text-xl mt-4 mb-2">Episodes featuring residents:</h3>
      <ul className="list-disc pl-4">
        {episodes.map((episode) => (
          <li key={episode.id} className="mb-2">
            {episode.name} - {episode.air_date}
          </li>
        ))}
      </ul>
    </div>
  )
}
