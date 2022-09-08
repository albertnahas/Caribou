import * as React from "react"
import Button from "@mui/material/Button"
import { apiBaseUrl } from "./helpers"
import { Providers } from "./Providers"
import { Finder } from "./components/Finder/Finder"

function App() {
  console.log(apiBaseUrl())

  return (
    <Providers>
      <Finder />
    </Providers>
  )
}

export default App
