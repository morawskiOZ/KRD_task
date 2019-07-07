import React from "react"
import "./App.scss"
import Header from "../Header/Header";
import {AppContextProvider} from "./../../context/context"

const App: React.FC = () => {
  return (
    <AppContextProvider>
    <div className="App">
      <Header />
    </div>
    </AppContextProvider>
  )
}

export default App
