import React from "react"
import Header from "../Header/Header"
import { AppContextProvider } from "./../../context/context"
import "./App.scss"
import List from "../List/List"

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className="AppFrame">
        <Header />
        <List />
      </div>
    </AppContextProvider>
  )
}

export default App
