import { CharacterList } from './components/CharacterList'
import { LocationEpisodes } from './components/LocationEpisodes'
import MeeSeeks from './components/MeeSeeks/MeeSeeks'

function App() {
  return (
    <>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 rounded-b-lg p-4 bg-blue-400 text-blue-950 text-3xl font-bold mb-8 z-index-10">
        Rick and Morty Explorer
      </header>
      <div className="container p-4 mx-auto text-white bg-blue-500/25 rounded-lg my-2 max-h-[96vh] z-index-5">
        <section className="mb-8">
          <MeeSeeks classOverrides="z-index-1 mx-auto" />
          <CharacterList />
        </section>

        <section>
          <LocationEpisodes />
        </section>
      </div>
    </>
  )
}

export default App
