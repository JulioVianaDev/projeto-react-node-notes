import * as React from "react"
import * as ReactDOM from "react-dom"
import { Outlet } from "react-router-dom"
import routes from "./routes"

function App() {

  return(
  <>
    <Outlet/>
  </>
  )
}

export default App;
