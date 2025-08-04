import { CharacterList } from './components/CharacterList'
import { LocationEpisodes } from './components/LocationEpisodes'

function App() {
  return (
    <div className="container mx-auto p-4 text-white bg-gray-500/50 rounded-lg my-2 h-[95%] overflow-y-auto flex flex-col gap-2">
      <h1 className="text-3xl font-bold mb-8">Rick and Morty Explorer</h1>

      <section className="mb-8">
        <h2 className="text-2xl mb-4">Characters</h2>
        <CharacterList />
      </section>

      <section>
        <h2 className="text-2xl mb-4">Location Details for location with id 1:</h2>
        <LocationEpisodes locationId="1" />
      </section>
    </div>
  )
}

export default App
