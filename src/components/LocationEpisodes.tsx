import React, { useEffect, useState } from 'react'
import { getLocation, getLocationResidentPromises, getResidents } from '../utils/api'
import { Character, Location } from '../utils/types'

export const LocationEpisodes: React.FC = () => {
  const [searchTermLocationId, setSearchTermLocationId] = useState<number>(1)
  const [location, setLocation] = useState<Location | null>(null)
  const [residents, setResidents] = useState<Character[]>([])

  useEffect(() => {
    const fetchLocationData = async () => {
      const locationData: Location = await getLocation(String(searchTermLocationId))
      setLocation(locationData)

      const locationResidentPromises = getLocationResidentPromises(locationData?.residents)
      const residentsData = await getResidents(locationResidentPromises)
      setResidents(residentsData)
    }

    fetchLocationData()
  }, [searchTermLocationId])

  return (
    <div className="p-4">
      <label className="block mb-1" htmlFor="locationId">
        Select a location by ID:
      </label>
      <input
        type="number"
        id="locationId"
        min={1}
        value={searchTermLocationId}
        onChange={(e) => setSearchTermLocationId(Number(e.target.value))}
        className="border-none outline-none p-2 mb-4 text-black rounded-lg"
        placeholder="Search location by id..."
      />
      {location ? (
        <>
          <div className="p-4 bg-blue-800/50 rounded-lg my-2">
            <h2 className="text-2xl mb-4">{location.name}</h2>
            <p>Dimension: {location.dimension}</p>
            <p>Type: {location.type}</p>
          </div>

          <h3 className="text-xl mt-4 mb-2">
            List of characters who have been last seen in the location:
          </h3>
          <ul className="list-disc pl-4">
            {residents.map((resident) => (
              <li key={resident.id} className="mb-2">
                {resident.name} - {resident.species}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>Loading location...</div>
      )}
    </div>
  )
}
