export type Location = {
  id: number
  name: string
  dimension: string
  type: string
  residents: string[]
  created: string
}

export type Character = {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}
