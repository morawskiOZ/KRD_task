import React from "react"
import Header from "../Header/Header"
import { AppContextProvider } from "./../../context/context"
import "./App.scss"

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className="AppFrame">
        <Header />
      </div>
    </AppContextProvider>
  )
}

export default App
