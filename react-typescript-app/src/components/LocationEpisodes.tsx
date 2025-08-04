import React, { useEffect, useState } from 'react'
import { Location, Episode } from '../types'
import { fetchData, getLocationResidents } from '../utils/api'

interface LocationEpisodesProps {
  locationId: string
}

export const LocationEpisodes: React.FC<LocationEpisodesProps> = ({ locationId }) => {
  const [location, setLocation] = useState<Location | null>(null)
  const [episodes, setEpisodes] = useState<Episode[]>([])

  useEffect(() => {
    const fetchLocationData = async () => {
      const locationData = await fetchData(`location/${locationId}`)
      setLocation(locationData)

      const residents = await getLocationResidents(locationId)
      for (const resident of residents) {
        const residentData = await resident
        const episodePromises = residentData.episode.map((url: string) =>
          fetchData(`episode/${url.split('/').pop()}`)
        )
        for (const episodePromise of episodePromises) {
          const episode = await episodePromise
          setEpisodes((prev) => [...prev, episode])
        }
      }
    }

    fetchLocationData()
  }, [locationId])

  if (!location) return <div>Loading location...</div>

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{location.name}</h2>
      <p>Dimension: {location.dimension}</p>
      <p>Type: {location.type}</p>

      <h3 className="text-xl mt-4 mb-2">
        List of character who have been last seen in the location:
      </h3>
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
