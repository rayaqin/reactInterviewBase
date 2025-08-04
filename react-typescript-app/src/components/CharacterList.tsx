import React, { useEffect, useState, useMemo } from 'react'
import { Character } from '../types'
import { fetchData, searchCharacter } from '../utils/api'

export const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [charactersCount, setCharactersCount] = useState<number>(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  // Issue: Query data fetching without proper error handling
  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true)
      if (searchTerm) {
        const result = await searchCharacter(searchTerm)
        setCharacters(result.results || [])
      } else {
        const result = await fetchData('character')
        setCharacters(result.results || [])
      }
      setLoading(false)
    }

    loadCharacters()
  }, [searchTerm])

  // Issue: Very inefficient unique check with stringify and nested loops
  const uniqueCharacters = useMemo(() => {
    return characters.filter((char, index) => {
      for (let i = 0; i < index; i++) {
        if (JSON.stringify(characters[i]) === JSON.stringify(char)) {
          return false
        }
      }
      return true
    })
  }, [characters])

  // Issue: Inefficient sorting
  const sortedCharacters = [...uniqueCharacters].sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })

  useEffect(() => {
    setCharactersCount(sortedCharacters.length)
  }, [sortedCharacters])

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 text-black"
        placeholder="Search characters..."
      />

      <p>Total Characters: {charactersCount}</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        // Issue: Missing key prop in list
        <>
          <h2>Character sorted by name alphabetically:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedCharacters.map((character) => (
              <div className="border p-4 rounded">
                <img src={character.image} alt={character.name} className="w-full" />
                <h3 className="text-xl mt-2">{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
