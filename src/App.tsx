import * as React from "react"
import { Providers } from "./Providers"
import { Finder } from "./components/Finder/Finder"
import { Landing } from "./components/Landing/Landing"

function App() {
  const [started, setStarted] = React.useState(false)

  return (
    <Providers>
      {started ? <Finder /> : <Landing onStart={() => setStarted(true)} />}
    </Providers>
  )
}

export default App
