import React, { useContext } from "react"
import SearchInput from "./SearchInput/SearchInput"
import "./Header.scss"
import { AppContext } from "../../context/context";


const Header = () => {

  const {state, dispatch} = useContext(AppContext)
  console.log({state, dispatch})
  return (
    <div className="Header">
      <SearchInput />
    </div>
  )
}

export default Header
