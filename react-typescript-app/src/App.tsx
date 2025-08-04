import { CharacterList } from './components/CharacterList'
import { LocationEpisodes } from './components/LocationEpisodes'

function App() {
  /*
  - query data, unique check with stringify performance issues
  - sorting optimization
  - query paralellization
  - key for mapping over list of elements in react
  - memoizing something really performant for no reason
  - typescript infer error
  - part of task to create new type by picking from existing type (pick omit etc)
  - non awaited promise in try catch
  - something error-prone not in try catch
  - function that returns any, but should be remade into a generic type function, because we use a common field of the possible object types somewhere
  - we use unknown string in url without encoding
  */
  return (
    <div className="container mx-auto p-4 text-white bg-gray-500/50 rounded-lg my-2 h-[95%] overflow-y-auto flex flex-col gap-2">
      <h1 className="text-3xl font-bold mb-8">Rick and Morty Explorer</h1>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Characters</h2>
        <CharacterList />
      </div>

      <div>
        <h2 className="text-2xl mb-4">Location Details for location with id 1:</h2>
        <LocationEpisodes locationId="1" />
      </div>
    </div>
  )
}

export default App
