import React from "react"
import Header from "../Header/Header"
import { AppContextProvider } from "./../../context/context"
import "./App.scss"
import List from "../List/List"
import Loader from "../Loader/Loader";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className="AppFrame">
        <Header />
        <Loader />
        <List />
      </div>
    </AppContextProvider>
  )
}

export default App
