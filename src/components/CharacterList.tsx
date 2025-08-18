import React, { useEffect, useState, useMemo } from 'react'
import { searchCharacter } from '../utils/api'
import { Character } from '../utils/types'

export const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Array<Character>>([])
  const [charactersCount, setCharactersCount] = useState<number>(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true)
      const characters = await searchCharacter(searchTerm)
      setCharacters(characters || [])

      setLoading(false)
    }

    loadCharacters()
  }, [searchTerm])

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

  const sortedCharacters = [...uniqueCharacters]

  for (let i = 0; i < sortedCharacters.length; i++) {
    for (let j = 0; j < sortedCharacters.length - i - 1; j++) {
      if (sortedCharacters[j].name.toLowerCase() > sortedCharacters[j + 1].name.toLowerCase()) {
        const temp = sortedCharacters[j]
        sortedCharacters[j] = sortedCharacters[j + 1]
        sortedCharacters[j + 1] = temp
      }
    }
  }

  useEffect(() => {
    setCharactersCount(sortedCharacters.length)
  }, [sortedCharacters])

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-none outline-none p-2 mb-4 text-black rounded-lg"
        placeholder="Search characters..."
      />

      <span>Total unique characters on this page: {charactersCount}</span>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <span className="text-xl my-2 font-bold">Characters sorted by name alphabetically:</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {sortedCharacters.map((character) => (
              <div className="border border-cyan-800/60 p-2 rounded-xl bg-blue-950">
                <img src={character.image} alt={character.name} className="w-38 h-38" />
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
