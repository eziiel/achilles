import { MainHome } from "./componentes/mainHomePath"
import { ProviderContextTheme } from "./contextTheme"

function App() {

  return (
    <div className="App">
      <ProviderContextTheme>
        <MainHome />
      </ProviderContextTheme>
    </div>
  )
}

export default App
